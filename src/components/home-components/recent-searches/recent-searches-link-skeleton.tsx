import { GridItem, Skeleton } from "@chakra-ui/react";

const RecentSearchesLinkSkeleton = () => {
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
      <Skeleton
        gridColumn={2}
        startColor="gray.200"
        endColor="gray.400"
        borderRadius="full"
        boxSize={{ base: "50px", sm: "100px" }}
        flexShrink={0}
      />
      <Skeleton
        gridColumn={2}
        startColor="gray.200"
        endColor="gray.400"
        w={"full"}
        h={{ base: "20px", md: "24px" }}
        mt={{ base: "2", md: "0" }}
        ml={{ base: "2", md: "4" }}
      />
    </GridItem>
  );
};

export default RecentSearchesLinkSkeleton;
