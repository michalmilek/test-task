import { Box, Text } from "@chakra-ui/react";
import React from "react";

const ReposTableError = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"full"}
      h={"300px"}>
      <Text
        color="red.500"
        fontSize="xl">
        Error during fetching repositories.
      </Text>
    </Box>
  );
};

export default ReposTableError;
