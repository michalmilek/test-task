import { GridItem, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const RecentSearchesLinkError = () => {
  const { t } = useTranslation();
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
        {t("error.error")}
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
        {t("error.failedLoad2")}
      </Text>
    </GridItem>
  );
};

export default RecentSearchesLinkError;
