import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { routes } from "./router/routes";
import theme from "./theme/theme";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

const SuspenseApp = () => {
  return (
    <Suspense fallback="loading">
      <App />
    </Suspense>
  );
};

export default SuspenseApp;
