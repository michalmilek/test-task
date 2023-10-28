import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useMediaQuery,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const LanguageDataError = () => {
  const { t } = useTranslation();
  const [isLargerThan1100] = useMediaQuery("(min-width: 1100px)");
  return (
    <Flex
      flexDirection={isLargerThan1100 ? "row" : "column"}
      gap={isLargerThan1100 ? "8" : "2"}
      alignItems={"center"}>
      <TableContainer>
        <Table
          bg="white"
          variant="simple">
          <Thead>
            <Tr>
              <Th>{t("languageData.language")}</Th>
              <Th isNumeric>{t("languageData.contribution")}</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr fontSize={{ base: "sm", md: "md" }}>
              <Td>
                <Text color="red.500">{t("error.error")}</Text>
              </Td>
              <Td isNumeric>
                <Text color="red.500">{t("error.error")}</Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default LanguageDataError;
