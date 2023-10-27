import Home from "../pages/Home";
import Resume from "../pages/Resume";

export const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/resume/:username",
    component: <Resume />,
  },
];
