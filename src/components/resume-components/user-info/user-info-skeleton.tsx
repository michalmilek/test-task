import { Flex, Link, Heading, Text, Button, Skeleton } from "@chakra-ui/react";

const UserInfoSkeleton = () => {
  return (
    <Flex
      flexDirection={"column"}
      alignItems="center"
      gap={8}
      mb={4}>
      <Skeleton
        startColor="gray.200"
        endColor="gray.400"
        borderRadius="full"
        boxSize={{ base: "100px", lg: "150px" }}
        mr={2}
      />
      <Link
        href=""
        isExternal
        fontSize={{ sm: "2xl", lg: "5xl" }}>
        <Skeleton
          height="1em"
          width="10em"
        />
      </Link>

      <Skeleton
        mb={2}
        height="1em"
        width="8em"
      />
      <Skeleton
        mb={2}
        height="1em"
        width="10em"
      />

      <Flex
        flexDirection={{ base: "row", sm: "column", lg: "row" }}
        gap={4}
        alignItems={"center"}
        justifyContent={"center"}>
        <Link
          href=""
          isExternal>
          <Button
            tabIndex={-1}
            colorScheme="gray">
            <Skeleton
              height="1em"
              width="4em"
            />
          </Button>
        </Link>
        <Link
          href=""
          isExternal>
          <Button
            tabIndex={-1}
            colorScheme="twitter">
            <Skeleton
              height="1em"
              width="4em"
            />
          </Button>
        </Link>
        <Link
          href=""
          isExternal>
          <Button
            tabIndex={-1}
            colorScheme="blue">
            <Skeleton
              height="1em"
              width="6em"
            />
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default UserInfoSkeleton;
