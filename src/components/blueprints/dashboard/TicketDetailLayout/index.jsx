import { useEffect, useState } from "react";
import getData from "../../../../api/getData";
import { useParams } from "react-router-dom";

const TicketDetailLayout = () => {
  const [data, setData] = useState(null); // Inisialisasi state data dengan null
  const params = useParams().id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(`/tickets/${params}`);
        const ticketData = response.data;
        if (ticketData.length === 0) {
          console.log("Ticket not found");
          return;
        }

        const customersResponse = await getData(
          `/customers/${ticketData.customer_id}`
        );
        const customerData = customersResponse.data;
        setData({ ...ticketData, customerData });
        console.log(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params]);

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#181818] border border-gray-200 w-full p-8 rounded-md shadow-md ">
      {data ? (
        <div className="flex flex-col justify-center w-full h-full gap-4 md:justify-normal md:flex-row md:items-center ">
          <div className="flex items-center justify-center flex-grow w-full h-full gap-2 p-8 dark:bg-[#181818] bg-white rounded-md shadow-md ">
            <div className="flex flex-col items-center w-full gap-4">
              <p className="text-3xl font-semibold text-center dark:text-white">
                Customer Info
              </p>
              <div className="flex flex-col items-center gap-2 lg:flex-row">
                <img
                  src={data?.customerData?.avatar}
                  alt={data.customerData?.name}
                  className="object-cover rounded-full w-52 h-52"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-3xl dark:text-white">
                    Id:{" "}
                    <span className="font-semibol">
                      {data?.customerData?.id}
                    </span>
                  </p>
                  <p className="text-3xl dark:text-white">
                    Name:{" "}
                    <span className="font-semibold">
                      {data?.customerData?.name}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-grow w-full h-full gap-2 p-8 dark:bg-[#181818] bg-white rounded-md shadow-md ">
            <div className="flex flex-col min-h-full gap-1 dark:text-white">
              <p className="text-xl">
                Description:{" "}
                <span className="font-semibold">{data.description}</span>
              </p>
              <p className="text-xl">
                Status: <span className="font-semibold">{data.status}</span>
              </p>
              <p className="text-xl">
                Priority: <span className="font-semibold">{data.priority}</span>
              </p>
              <p className="text-xl">
                Other Status:{" "}
                <span className="font-semibold">{data.otherStatus}</span>
              </p>
              <p className="text-xl">
                Count: <span className="font-semibold">{data.count}</span>
              </p>
              <p className="text-xl">
                Group: <span className="font-semibold">{data.group}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TicketDetailLayout;
