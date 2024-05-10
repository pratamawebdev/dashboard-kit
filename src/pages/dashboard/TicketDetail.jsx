import { useParams } from "react-router-dom";
import DashboardLayout from "../../components/blueprints/dashboard/DashboardLayout";
import TicketDetailLayout from "../../components/blueprints/dashboard/TicketDetailLayout";

const TicketDetail = () => {
  const param = useParams();
  const { id } = param;
  return (
    <DashboardLayout titleNavbar={`Ticket With ID ${id}`}>
      <TicketDetailLayout />
    </DashboardLayout>
  );
};

export default TicketDetail;
