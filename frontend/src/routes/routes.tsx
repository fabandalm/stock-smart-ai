import { createBrowserRouter } from "react-router-dom";
import CategoryPage from "../pages/category/CategoryPage";
import App from "../App";
import StockPage from "../pages/stock/StockPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import SupplierPage from "../pages/supplier/SupplierPage";
import InboundOutboundPage from "../pages/stockFlow/InboundOutboundPage";
import InboxPage from "../pages/inbox/InboxPage";
import NotFound from "../pages/notFound/NotFound";
import LoginPage from "../pages/login/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";
// @ts-ignore
import ProtectedRoutes from "./ProtectedRoutes";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "", element: <LoginPage></LoginPage> },
      { path: "/stock", element: (<ProtectedRoutes><StockPage></StockPage></ProtectedRoutes>),},
      { path: "/supplier", element: (<ProtectedRoutes><SupplierPage></SupplierPage></ProtectedRoutes>),},
      { path: "/category", element: (<ProtectedRoutes><CategoryPage></CategoryPage></ProtectedRoutes>),},
      { path: "/flow", element: (<ProtectedRoutes><InboundOutboundPage></InboundOutboundPage></ProtectedRoutes>),},
      { path: "/inbox", element: (<ProtectedRoutes><InboxPage></InboxPage></ProtectedRoutes>),},
      { path: "/dashboard", element: (<ProtectedRoutes><DashboardPage></DashboardPage></ProtectedRoutes>),},
      { path: "/login", element: <LoginPage></LoginPage> },
      { path: "/register", element: <RegisterPage></RegisterPage> },
      { path: "*", element: <NotFound></NotFound> },
    ],
  },
]);
