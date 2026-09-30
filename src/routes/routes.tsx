import App from "@/App"
import RootLayout from "@/layout/root-layout"
import NotFound from "@/pages/not-found"
import { createBrowserRouter } from "react-router"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
])
