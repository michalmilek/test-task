import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { Theme } from "@emotion/react/macro";
import "@fontsource-variable/raleway";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

interface StyleOptions {
  theme: Theme;
  colorMode: "light" | "dark";
  colorScheme: string;
}

const styles = {
  global: (props: StyleOptions) => ({
    "html, body": {
      fontSize: "sm",
      bg: props.colorMode === "dark" ? "gray.700" : "gray.300",
    },
  }),
};

const theme = extendTheme({
  config,
  styles,
  fonts: {
    heading: "Raleway Variable",
    body: "Raleway Variable",
  },
});

export default theme;
