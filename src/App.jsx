import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login";
import "./App.css";

const router = createBrowserRouter([{ path: "/", element: <Login /> }]);

export default function App() {
  return <RouterProvider router={router} />;
}
