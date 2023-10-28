import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const UserInfoError = () => {
  return (
    <Flex
      flexDirection={"column"}
      alignItems="center"
      gap={8}
      mb={4}>
      <Text
        color="red.500"
        fontSize="2xl">
        Error: Failed to load data.
      </Text>
    </Flex>
  );
};

export default UserInfoError;
