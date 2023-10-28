import { Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const UserInfoError = () => {
  const { t } = useTranslation();
  return (
    <Flex
      flexDirection={"column"}
      alignItems="center"
      width={{ base: "160px", md: "250px", lg: "auto" }}
      gap={8}
      mb={4}>
      <Text
        color="red.500"
        fontSize="2xl">
        {t("error.failedLoad")}
      </Text>
    </Flex>
  );
};

export default UserInfoError;
