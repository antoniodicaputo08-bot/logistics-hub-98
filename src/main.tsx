import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter, createRootRoute, createRoute, Outlet } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles.css";

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

const routeTree = rootRoute.addChildren([indexRoute]);

const router = createRouter({ routeTree });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
