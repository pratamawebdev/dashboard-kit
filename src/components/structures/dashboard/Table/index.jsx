/* eslint-disable react/prop-types */
import { useState } from "react";
import { formatDate } from "../../../../utils/formatDate";
import { formatTime } from "../../../../utils/formatTime";
import { formatTimeDifference } from "../../../../utils/formatTimeDifference";
import { formatToMonth } from "../../../../utils/formatToMonth";
import { getPriorityBgColor } from "../../../../utils/getPriorityColor";
import Button from "../../../elements/globals/Button";
import ActionModal from "../../../elements/dashboard/ActionModal";
import IconIconExternalLink from "../../../elements/globals/icons/IconIconExternalLink";
import IconCheckCircle from "../../../elements/globals/icons/IconCheckCircle";
import IconCircleXmark from "../../../elements/globals/icons/iconCircleXmark";
import { Link } from "react-router-dom";
import updateData from "../../../../api/updateData";

const Table = ({ dataThead, dataTickets }) => {
  const [selectedTicketId, setSelectedTicketId] = useState(null);
  const [tickets, setTickets] = useState(dataTickets);
  const role = localStorage.getItem("role");

  const handleEllipsisClick = (ticketId) => {
    setSelectedTicketId(ticketId);
  };

  const handleUpdateStatus = async (ticketId, status) => {
    try {
      const currentDate = new Date().toISOString();
      await updateData(
        `/tickets/${ticketId}`,
        { status, updated_at: currentDate },
        "Ticket"
      );
      const updatedTickets = tickets.map((ticket) =>
        ticket.id === ticketId
          ? { ...ticket, status, updated_at: currentDate }
          : ticket
      );
      setTickets(updatedTickets);
    } catch (error) {
      console.error("Failed to update ticket status:", error);
    }
  };

  return (
    <>
      <table className="w-full min-w-[800px] overflow-y-auto">
        <thead className="border-b border-[#A5A8B9]">
          <tr>
            {dataThead?.map((item, index) => (
              <th
                key={index}
                className={`text-left text-sm text-[#A5A8B9] py-2 tracking-wide ${
                  index === 0 ? "pl-8" : ""
                }`}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataTickets.map((ticket) => {
            const handleCekStatus = () => {
              if (ticket.updated_at) {
                return (
                  <span className="text-sm">
                    Updated {formatTimeDifference(ticket.updated_at)}
                  </span>
                );
              } else {
                return (
                  <span className="text-sm">
                    Created {formatTimeDifference(ticket.created_at)}
                  </span>
                );
              }
            };
            return (
              <tr
                key={ticket.id}
                className="hover:bg-[#F7F8FF] cursor-pointer border-b border-[#A5A8B9]"
              >
                <td className="pl-8 text-[#A5A8B9] py-6">
                  <div className="flex items-center gap-7">
                    <img
                      src="https://icon-library.com/images/free-avatar-icon/free-avatar-icon-10.jpg"
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex flex-col">
                      <p className="font-medium text-black dark:text-[#3751FF]">
                        {ticket.description}
                      </p>
                      {handleCekStatus()}
                    </div>
                  </div>
                </td>
                <td className="py-6">
                  <div className="flex flex-col">
                    <p className="font-semibold text-md dark:text-[#3751FF]">
                      {ticket?.customer?.name}
                    </p>
                    <span className="text-sm text-[#A5A8B9] ">
                      on {formatDate(ticket.created_at)}
                    </span>
                  </div>
                </td>
                <td>
                  <div className="flex flex-col">
                    <p className="font-semibold text-md dark:text-[#3751FF]">
                      {formatToMonth(ticket.created_at)}
                    </p>
                    <span className="text-sm text-[#A5A8B9]">
                      {formatTime(ticket.created_at)}
                    </span>
                  </div>
                </td>
                <td>
                  <span
                    className={`py-1 px-4 rounded-2xl text-white  ${getPriorityBgColor(
                      ticket.priority
                    )} `}
                  >
                    {ticket.priority}
                  </span>
                </td>
                <td className="relative">
                  <Button
                    type="button"
                    onClick={() => handleEllipsisClick(ticket.id)}
                    className="flex items-center justify-center w-8 h-8"
                  >
                    <img
                      src="./images/icon/ellipsis-vertical.svg"
                      className="object-cover w-6 h-6"
                    />
                  </Button>
                  {selectedTicketId === ticket.id && role === "admin" && (
                    <ActionModal
                      onClose={() => setSelectedTicketId(null)}
                      classname={"top-0 right-16"}
                    >
                      <div className="flex flex-col gap-2">
                        <Link
                          to={`/ticket/${ticket.id}`}
                          className="flex items-center gap-2"
                        >
                          <IconIconExternalLink />
                          <span className="hidden font-medium md:block">
                            Detail
                          </span>
                        </Link>
                        {ticket.status === "approve" ? (
                          <div
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() =>
                              handleUpdateStatus(ticket.id, "reject")
                            }
                          >
                            <IconCircleXmark />
                            <span className="hidden font-medium md:block">
                              Reject
                            </span>
                          </div>
                        ) : (
                          <div
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() =>
                              handleUpdateStatus(ticket.id, "approve")
                            }
                          >
                            <IconCheckCircle />
                            <span className="hidden font-medium md:block">
                              Approve
                            </span>
                          </div>
                        )}
                      </div>
                    </ActionModal>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
