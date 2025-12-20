import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./pages/Home.jsx";
import { AllTasks } from "./pages/AllTasks.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className ="flex flex-col h-screen">
        <Navbar items={[
          {to: "/home", label: "Home"},
          {to: "/all-tasks", label: "All Tasks"}]}/>
        <Outlet />
      </div>
      ),
    children: [
    { path: "/", element: <Navigate to="/home" replace />},
      { path: "/home", element: <Home /> },
      { path: "/all-tasks", element: <AllTasks /> },
      { path: "*", element: <div>404 Not Found</div> },
    ]
  }
]);

export function App() {
  return (
  <div className="bg-blue-300 w-full h-screen flex flex-col">
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </div>
  )
}
