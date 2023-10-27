import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { routes } from "./router/routes";
import theme from "./theme/theme";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import useDynamicTitle from "./hooks/useDynamicTitle";

const queryClient = new QueryClient();

function App() {
  useDynamicTitle();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
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
