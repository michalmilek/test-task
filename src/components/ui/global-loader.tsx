import { Box, Spinner, useColorMode } from "@chakra-ui/react";

const LoadingComponent = () => {
  const { colorMode } = useColorMode();
  const colorScheme = colorMode === "light" ? "teal" : "purple";
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh">
      <Spinner
        thickness="4px"
        size="xl"
        color={colorScheme}
      />
    </Box>
  );
};

export default LoadingComponent;
