import { useEffect, useState } from "react";
import DashboardLayout from "../../components/blueprints/dashboard/DashboardLayout";
import Table from "../../components/structures/dashboard/Table";
import { dataThead } from "../../data";
import TableLayout from "../../components/blueprints/dashboard/TableLayout";
import getData from "../../api/getData";

const Ticket = () => {
  const [tickets, setTickets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ticketsPerPage, setTicketsPerPage] = useState(10);
  const [newToOld, setNewToOld] = useState(true);
  const [newToOldFilter, setNewToOldFilter] = useState(true);
  const [originalTickets, setOriginalTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData("/tickets");
        const customersResponse = await getData("/customers");
        const customersData = customersResponse.data;
        const ticketsWithCustomers = response.data.map((ticket) => {
          const customer = customersData.find(
            (customer) => customer.id === ticket.customer_id
          );
          return { ...ticket, customer };
        });
        const sortedTickets = ticketsWithCustomers.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );

        setTickets(sortedTickets);
        setOriginalTickets(sortedTickets);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = tickets.slice(indexOfFirstTicket, indexOfLastTicket);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(tickets.length / ticketsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleRowsPerPageChange = (event) => {
    setCurrentPage(1);
    setTicketsPerPage(Number(event.target.value));
  };

  const handleSort = () => {
    const sortedTickets = [...tickets].sort((a, b) => {
      if (newToOld) {
        return new Date(a.created_at) - new Date(b.created_at);
      } else {
        return new Date(b.created_at) - new Date(a.created_at);
      }
    });
    setTickets(sortedTickets);
    setNewToOld(!newToOld);
  };

  const handleFilter = (event) => {
    const selectedOption = event.target.value;
    let filteredTickets = [];

    if (selectedOption === "approve") {
      filteredTickets = originalTickets.filter(
        (ticket) => ticket.status === "approve"
      );
    } else if (selectedOption === "reject") {
      filteredTickets = originalTickets.filter(
        (ticket) => ticket.status === "reject"
      );
    } else {
      filteredTickets = [...originalTickets];
    }

    if (newToOldFilter) {
      filteredTickets.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
    } else {
      filteredTickets.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      );
    }

    setTickets(filteredTickets);
  };

  return (
    <DashboardLayout titleNavbar={"Ticket"}>
      <TableLayout
        handleRowsPerPageChange={handleRowsPerPageChange}
        ticketsPerPage={ticketsPerPage}
        tickets={tickets}
        indexOfFirstTicket={indexOfFirstTicket}
        indexOfLastTicket={indexOfLastTicket}
        handlePrevPage={() =>
          setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
        }
        handleNextPage={() =>
          setCurrentPage((prevPage) =>
            Math.min(prevPage + 1, pageNumbers.length)
          )
        }
        disabledPrevPage={currentPage === 1}
        disabledNextPage={currentPage === pageNumbers.length}
        handleFilter={handleFilter}
        handleSort={handleSort}
        newToOld={newToOld}
      >
        <Table dataThead={dataThead} dataTickets={currentTickets} />
      </TableLayout>
    </DashboardLayout>
  );
};

export default Ticket;
