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

      <Heading
        as={"h2"}
        fontWeight="bold"
        fontSize={"lg"}
        mb={2}>
        <Skeleton
          height="1em"
          width="8em"
        />
      </Heading>
      <Text
        fontSize={"md"}
        mb={2}>
        <Skeleton
          height="1em"
          width="10em"
        />
      </Text>
      <Flex
        flexDirection={{ base: "row", md: "column", lg: "row" }}
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
