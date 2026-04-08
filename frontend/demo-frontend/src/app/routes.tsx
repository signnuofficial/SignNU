import { createBrowserRouter } from "react-router";
import { Dashboard } from "./pages/Dashboard";
import { NewForm } from "./pages/NewForm";
import { FormDetails } from "./pages/FormDetails";
import { ApprovalQueue } from "./pages/ApprovalQueue";
import { MySubmissions } from "./pages/MySubmissions";
import { QRSignature } from "./pages/QRSignature";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Root } from "./pages/Root";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: "new-form", Component: NewForm },
      { path: "form/:id", Component: FormDetails },
      { path: "approvals", Component: ApprovalQueue },
      { path: "submissions", Component: MySubmissions },
    ],
  },
  {
    path: "/qr/:token",
    Component: QRSignature,
  },
  {
  path: "/",
  element: <Root />,
  children: [
    { path: "dashboard", element: <Dashboard /> },
  ]
}
]);