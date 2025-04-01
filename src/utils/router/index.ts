import { useRoutes } from "react-router"

const routes = [{
  path: "/",
  element: <Home />,
}]

const router = useRoutes(routes)
