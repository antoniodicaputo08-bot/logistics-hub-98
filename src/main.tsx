import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter, createRootRoute, createRoute, Outlet } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles.css";

// importa apenas o componente do dashboard — sem SSR overhead
import Dashboard from "./routes/index";

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Dashboard,
});

// sub-path para quando está em /logistics-hub-98/
const indexRoute2 = createRoute({
  getParentRoute: () => rootRoute,
  path: "/logistics-hub-98",
  component: Dashboard,
});

const routeTree = rootRoute.addChildren([indexRoute, indexRoute2]);

const router = createRouter({
  routeTree,
  basepath: "/logistics-hub-98",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
