import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/Login";
import Overview from "./pages/dashboard/Overview";
import Ticket from "./pages/dashboard/Ticket";
import TicketDetail from "./pages/dashboard/TicketDetail";

const router = createBrowserRouter([
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Overview />,
  },
  {
    path: "/tickets",
    element: <Ticket />,
  },
  {
    path: "/ticket/:id",
    element: <TicketDetail />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
