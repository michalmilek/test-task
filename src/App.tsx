import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { routes } from "./router/routes";
import theme from "./theme/theme";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import useDynamicTitle from "./hooks/useDynamicTitle";
import Header from "./components/header";
import WrongPage from "./components/resume-components/wrong-page";
import LoadingComponent from "./components/ui/global-loader";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

function App() {
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
            element={<WrongPage />}
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
