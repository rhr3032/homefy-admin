import { createBrowserRouter } from "react-router";
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./components/admin/Dashboard";
import Properties from "./components/admin/Properties";
import Categories from "./components/admin/Categories";
import Testimonials from "./components/admin/Testimonials";
import Blog from "./components/admin/Blog";
import FAQs from "./components/admin/FAQs";
import Customers from "./components/admin/Customers";
import Transactions from "./components/admin/Transactions";
import Invoices from "./components/admin/Invoices";
import ContactInfo from "./components/admin/ContactInfo";
import RoleManagement from "./components/admin/RoleManagement";
import Settings from "./components/admin/Settings";
import NotFound from "./components/admin/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AdminLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "properties", Component: Properties },
      { path: "categories", Component: Categories },
      { path: "testimonials", Component: Testimonials },
      { path: "blog", Component: Blog },
      { path: "faqs", Component: FAQs },
      { path: "customers", Component: Customers },
      { path: "transactions", Component: Transactions },
      { path: "invoices", Component: Invoices },
      { path: "contact-info", Component: ContactInfo },
      { path: "roles", Component: RoleManagement },
      { path: "settings", Component: Settings },
      { path: "*", Component: NotFound },
    ],
  },
]);
