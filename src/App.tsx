import { useState } from "react";
import { ChakraProvider, useToast } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Suspense } from "react";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import useDynamicTitle from "./hooks/useDynamicTitle";
import Header from "./components/header";
import LoadingComponent from "./components/ui/global-loader";
import { routes } from "./router/routes";
import theme from "./theme/theme";
import NotFoundPage from "./pages/NotFoundPage";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

function App() {
  const toast = useToast();
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 5000,
          refetchOnMount: false,
          refetchOnWindowFocus: false,
        },
      },
      queryCache: new QueryCache({
        onError: (error) => {
          if (error.response?.status === 500) {
            toast({
              title: "Internal server error",
              description:
                "Please contact with administrator or try again later.",
              status: "error",
              duration: 6000,
              isClosable: true,
            });
          }
        },
      }),
    })
  );

  useDynamicTitle();
  return (
    <QueryClientProvider client={queryClient}>
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
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

const SuspenseApp = () => {
  return (
    <ChakraProvider theme={theme}>
      <Suspense fallback={<LoadingComponent />}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </ChakraProvider>
  );
};

export default SuspenseApp;
