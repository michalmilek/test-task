import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./index.css";
import { routes } from "./router/routes";
import theme from "./theme/theme";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import useDynamicTitle from "./hooks/useDynamicTitle";
import Header from "./components/header";

const queryClient = new QueryClient();

function Layout() {
  return (
    <div>
      <Header />

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
}

function App() {
  useDynamicTitle();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route
            path="/"
            element={<Layout />}>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              />
            ))}
          </Route>
        </Routes>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

const SuspenseApp = () => {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  );
};

export default SuspenseApp;
