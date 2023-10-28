import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const ReposTableError = () => {
  const { t } = useTranslation();
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"full"}
      h={"300px"}>
      <Text
        color="red.500"
        fontSize={{ base: "xl", sm: "2xl" }}>
        {t("error.repositories")}
      </Text>
    </Box>
  );
};

export default ReposTableError;
