import { GridItem, Text } from "@chakra-ui/react";

const RecentSearchesLinkError = () => {
  return (
    <GridItem
      display={{ base: "grid", md: "flex" }}
      gridTemplateColumns={"1fr 1fr 1fr"}
      alignItems={"center"}
      w={"full"}
      justifyContent={{ base: "center", md: "flex-start" }}
      justifyItems={"center"}
      gap={{ base: "2", md: "8" }}
      transition={"all 0.3s ease"}
      cursor={"pointer"}>
      <Text
        gridColumn={2}
        borderRadius="full"
        boxSize={{ base: "50px", sm: "80px" }}
        flexShrink={0}
        bg="red.500"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize={{ base: "2xl", sm: "4xl" }}>
        Error
      </Text>
      <Text
        gridColumn={2}
        mt={{ base: "2", md: "0" }}
        ml={{ base: "2", md: "4" }}
        whiteSpace={{ base: "nowrap", md: "pre-wrap" }}
        bg="red.500"
        color="white"
        borderRadius="md"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize={{ base: "sm", sm: "md" }}>
        Something went wrong. Please try again later.
      </Text>
    </GridItem>
  );
};

export default RecentSearchesLinkError;
