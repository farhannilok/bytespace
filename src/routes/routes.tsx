import App from "@/App"
import NotFound from "@/pages/not-found"
import { createBrowserRouter } from "react-router"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "*",
    element: <NotFound />,
  },
])
