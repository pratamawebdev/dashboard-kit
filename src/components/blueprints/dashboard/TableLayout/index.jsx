/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../../../elements/globals/Button";
import IconBxSortDown from "../../../elements/globals/icons/IconBxSortDown";
import IconFilter from "../../../elements/globals/icons/IconFilter";
import Modal from "../../../elements/globals/Modal";
import FormTicket from "../../../structures/dashboard/FormTicket";
import IconBxSortUp from "../../../elements/globals/icons/IconBxSortUp";
import ActionModal from "../../../elements/dashboard/ActionModal";

const TableLayout = ({
  children,
  handleRowsPerPageChange,
  ticketsPerPage,
  indexOfFirstTicket,
  tickets,
  indexOfLastTicket,
  handleNextPage,
  handlePrevPage,
  disabledPrevPage,
  disabledNextPage,
  handleSort,
  handleFilter,
  newToOld,
}) => {
  const [open, setOpen] = useState(false);
  const [openfilter, setOpenfilter] = useState(false);

  return (
    <>
      <div className="bg-[#FFFFFF] dark:bg-[#181818] border border-gray-200 w-full rounded-md shadow-md">
        <div className="flex flex-col justify-between gap-4 p-8 md:gap-0 md:items-center md:flex-row">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold dark:text-white">
              All tickets
            </h2>
            <Button
              type="button"
              className="px-2 py-1 rounded-xl bg-[#3751FF] text-white font-medium"
              onClick={() => setOpen(true)}
            >
              Add Ticket
            </Button>
          </div>
          <div className="flex items-center gap-10">
            <Button
              onClick={handleSort}
              type="button"
              className="flex items-center gap-2 text-[#6B6F87] font-medium"
            >
              {newToOld ? <IconBxSortDown /> : <IconBxSortUp />}
              Sort
            </Button>
            <Button
              onClick={() => setOpenfilter(!openfilter)}
              type="button"
              className="flex items-center gap-2 text-[#6B6F87] font-medium"
            >
              <IconFilter />
              Filter
            </Button>
            {openfilter && (
              <ActionModal
                classname={"right-6 top-52"}
                onClose={() => setOpenfilter(false)}
              >
                <div className="my-2">
                  <select
                    name=""
                    id=""
                    className="form-field-input"
                    onChange={handleFilter}
                  >
                    <option value="all" defaultChecked>
                      All
                    </option>
                    <option value="approve">Approve</option>
                    <option value="reject">Reject</option>
                  </select>
                </div>
              </ActionModal>
            )}
          </div>
        </div>
        <div className="h-screen overflow-x-auto overflow-y-auto">
          {children}
        </div>
        <div className="flex flex-col gap-2 p-8 md:gap-16 md:items-center md:flex-row md:justify-end">
          <div className="flex items-center gap-2">
            <label htmlFor="" className="text-[#A5A8B9]">
              Rows per page:
            </label>
            <select
              name="rowsPerPage"
              id="rowsPerPage"
              className="text-[#6D7289] dark:text-[#3751FF] dark:bg-[#181818] "
              onChange={handleRowsPerPageChange}
              value={ticketsPerPage}
            >
              {[6, 8, 10].map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between md:gap-8">
            <p className="text-[#A5A8B9]">{`${
              indexOfFirstTicket + 1
            }-${Math.min(indexOfLastTicket, tickets.length)} of ${
              tickets.length
            }`}</p>
            <div className="flex items-center gap-4">
              <Button
                type="button"
                onClick={handlePrevPage}
                disabled={disabledPrevPage}
              >
                <img src="./images/icon/chevron-left.svg" className="w-6 h-6" />
              </Button>
              <Button
                type="button"
                onClick={handleNextPage}
                disabled={disabledNextPage}
              >
                <img
                  src="./images/icon/chevron-right.svg"
                  className="w-6 h-6"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Modal onClose={() => setOpen(false)} open={open} title="Add Ticket">
        <FormTicket
          closeModal={() => {
            setOpen(false);
          }}
        />
      </Modal>
    </>
  );
};

export default TableLayout;
