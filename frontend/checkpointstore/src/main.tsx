import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GameDetailsPage } from "./pages/GameDetails/GameDetailsPage.tsx";
import ScrollToTop from "./components/ScrollToTop/index.tsx";

const client = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/games/:id",
        element: <GameDetailsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
