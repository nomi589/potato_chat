import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import "./App.css";
import RestrictedRoute from "./helpers/RestrictedRoute";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/chat",
    element: (
      <RestrictedRoute>
        <Chat />
      </RestrictedRoute>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
