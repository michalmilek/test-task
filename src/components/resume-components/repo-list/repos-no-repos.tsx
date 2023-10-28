import { Flex, Text } from "@chakra-ui/react";

const ReposNoRepos = () => {
  return (
    <Flex
      align={"center"}
      justifyContent={"center"}
      w={"full"}
      h="200px">
      <Text
        as={"h3"}
        fontSize="xl"
        color="gray.500">
        This user doesn't have any repositories.
      </Text>
    </Flex>
  );
};

export default ReposNoRepos;
