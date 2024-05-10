import { useEffect, useState } from "react";
import DashboardLayout from "../../components/blueprints/dashboard/DashboardLayout";
import getData from "../../api/getData";
import { dataOtherStatus, otherData } from "../../data";
import IconCheckCircleBlue from "../../components/elements/globals/icons/IconCheckCircleBlue";
import IconCircle from "../../components/elements/globals/icons/iconCircle";
import { getTaskStatusColor } from "../../utils/getTaskStatusColor";
import Button from "../../components/elements/globals/Button";
import IconArrowsPlus from "../../components/elements/globals/icons/IconArrowsPlus";
import Chart from "../../components/structures/dashboard/Chart";
import { useTranslation } from "react-i18next";

const Overview = () => {
  const [ticketData, setTicketData] = useState([]);
  const [taskData, setTaskData] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    const fetchDataTickets = async () => {
      try {
        const responseTickets = await getData("/tickets");
        setTicketData(responseTickets.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataTickets();
  }, []);

  useEffect(() => {
    const fetchDataTasks = async () => {
      try {
        const responseTasks = await getData("/tasks");
        setTaskData(responseTasks.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataTasks();
  }, []);

  const countTicketsByStatus = (status) => {
    return ticketData.filter((ticket) => ticket.otherStatus === status).length;
  };
  return (
    <DashboardLayout titleNavbar={t("titleNavbarOverview")}>
      <div className="flex flex-col gap-8">
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {dataOtherStatus.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="py-6 bg-white border dark:bg-[#181818] border-gray-200 rounded-lg shadow-sm"
            >
              <div className="flex flex-col items-center justify-center gap-4">
                <span className="text-[#9FA2B4] font-medium dark:text-white">
                  {item.name}
                </span>
                <span className="text-4xl font-medium dark:text-white">
                  {countTicketsByStatus(item.otherStatus)}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-1 place-content-center lg:col-span-2 pt-10 pb-2 px-4 bg-white border dark:bg-[#181818] border-gray-200 rounded-l-lg shadow-sm">
            <Chart />
          </div>
          <div className="hidden lg:block col-span-1 bg-white border-r border-t border-b dark:bg-[#181818] pt-10 pb-2 border-gray-200 rounded-r-lg shadow-sm">
            <div className="grid grid-rows-5">
              <div className="flex flex-col items-center justify-center px-4 gap-4 py-8 border-b border-[#B9BBC8]">
                <span className="text-xl font-medium text-[#9FA2B4]">
                  {t("otherStatus.resolved")}
                </span>
                <p className="text-3xl font-semibold dark:text-white">
                  {countTicketsByStatus(
                    dataOtherStatus.otherStatus === "resolved"
                  )}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center px-4 gap-4 py-8 border-b border-[#B9BBC8]">
                <span className="text-xl font-medium text-[#9FA2B4]">
                  {t("otherStatus.received")}
                </span>
                <p className="text-3xl font-semibold dark:text-white">
                  {countTicketsByStatus(
                    dataOtherStatus.otherStatus === "received"
                  )}
                </p>
              </div>
              {otherData.map((item, index, array) => (
                <div
                  key={index}
                  className={`flex flex-col items-center gap-4 justify-center pb-7 ${
                    index === array.length - 1
                      ? ""
                      : "border-b border-[#B9BBC8]"
                  }`}
                >
                  <span className="text-xl font-medium text-[#9FA2B4]">
                    {item.name}
                  </span>
                  <p className="text-3xl font-semibold dark:text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="col-span-1 pt-10 pb-2 bg-white border dark:bg-[#181818] border-gray-200 rounded-lg shadow-sm">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between px-7">
                  <span className="font-semibold text-[#252733] text-lg dark:text-white">
                    Unresolved tickets
                  </span>
                  <span className="text-[#415AFF] font-medium text-sm">
                    View details
                  </span>
                </div>
                <p className="text-[#B9BBC8] font-medium px-7">
                  Group:{" "}
                  <span className="text-[#7C7F95] font-medium">Support</span>
                </p>
              </div>
              {ticketData
                .filter((ticket) => ticket.group === "support")
                .map((ticket, index, array) => (
                  <div
                    key={ticket.id}
                    className={`flex flex-col md:flex-row md:items-center gap-4 md:gap-0 md:justify-between pb-7 ${
                      index === array.length - 1
                        ? ""
                        : "border-b border-[#B9BBC8]"
                    }`}
                  >
                    <span className="text-xl font-medium text-black pl-7 dark:text-white">
                      {ticket.description}
                    </span>
                    <span className="md:pr-7 pl-7 md:pl-0 font-medium text-[#ABADBD] text-xl">
                      {ticket.count}
                    </span>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-span-1 pt-10 pb-2 dark:bg-[#181818] bg-white border border-gray-200 rounded-lg shadow-sm ">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between px-7">
                  <span className="font-semibold text-[#252733] text-lg dark:text-white">
                    Tasks
                  </span>
                  <span className="text-[#415AFF] font-medium text-sm">
                    View all
                  </span>
                </div>
                <p className="text-[#B9BBC8] font-medium px-7 ">Today</p>
              </div>
              <div className="border-b border-[#B9BBC8] pb-7 flex items-center justify-between">
                <span className="text-xl font-medium ml-7 text-[#B9BBC8]">
                  Create new task
                </span>
                <Button className="mr-7 bg-[#F0F1F7] rounded-full">
                  <IconArrowsPlus />
                </Button>
              </div>
              {taskData?.slice(0, 3).map((task, index, array) => (
                <div
                  key={task.id}
                  className={`flex flex-col gap-4 md:gap-0 md:flex-row md:items-center md:justify-between pb-5 ${
                    index === array.length - 1
                      ? ""
                      : "border-b border-[#B9BBC8]"
                  }`}
                >
                  <div className="flex items-center gap-2 pl-7">
                    {task.completed === "completed" ? (
                      <IconCheckCircleBlue />
                    ) : (
                      <IconCircle />
                    )}
                    <span className="text-xl font-medium text-black mr-7 md:mr-0 dark:text-white">
                      {task.title}
                    </span>
                  </div>
                  <span
                    className={`md:mr-7 ml-7 md:ml-0 font-medium px-4 py-1 w-fit rounded-lg text-xl ${getTaskStatusColor(
                      task.status
                    )}`}
                  >
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Overview;
