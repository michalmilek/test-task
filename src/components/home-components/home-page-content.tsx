import { Box, Heading, Link, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import RecentSearches from "./recent-searches/recent-searches";
import FindUserForm from "./find-user-form/find-user-form";

const HomePageContent = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "light" ? "gray.100" : "gray.500";

  return (
    <Box
      as="main"
      mx="auto"
      maxW={{ base: "md", sm: "xl", md: "6xl" }}
      w={"auto"}
      my={8}
      p={4}
      bg={bgColor}
      borderWidth="1px"
      borderRadius="lg">
      <Heading
        whiteSpace={"nowrap"}
        as="h1"
        fontSize={{ base: "xl", sm: "3xl", md: "5xl" }}
        fontWeight="bold"
        textAlign="center"
        textDecoration={"underline"}
        my={4}>
        Welcome to Github Resume Checker!
      </Heading>
      <Text
        textAlign={"center"}
        fontSize={{ base: "md", sm: "lg" }}>
        This is a project made for a test assignment. The website was modelled
        on{" "}
        <Link
          textDecoration={"underline"}
          href="https://resume.github.io/">
          resume.github.io
        </Link>
        .<br />
        Everything what you have to do is write your username in the input
        field.
      </Text>
      <FindUserForm />

      <RecentSearches />
    </Box>
  );
};

export default HomePageContent;
