import { Box, Heading, Link, Text, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import RecentSearches from "./recent-searches/recent-searches";
import FindUserForm from "./find-user-form/find-user-form";

const HomePageContent = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "light" ? "gray.100" : "gray.500";
  const { t } = useTranslation();

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
        {t("formHeading.welcomeMessage")}
      </Heading>
      <Text
        textAlign={"center"}
        fontSize={{ base: "md", sm: "lg" }}>
        {t("formHeading.projectDescription")}{" "}
        <Link
          textDecoration={"underline"}
          href="https://resume.github.io/">
          resume.github.io
        </Link>
        .<br />
        {t("formHeading.instruction")}
      </Text>
      <FindUserForm />

      <RecentSearches />
    </Box>
  );
};

export default HomePageContent;
