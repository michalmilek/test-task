import Home from "src/pages/Home";
import Resume from "src/pages/Resume";

const home = {
  path: "/",
  component: <Home />,
};

const resumeToUse = {
  path: "/resume",
  component: <Resume />,
};

const resume = {
  path: "/resume/:username",
  component: <Resume />,
};

export const routesOb = {
  home,
  resumeToUse,
};

export const routes = [home, resume];
