import {
  Box,
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

const LanguageDataError = () => {
  const [isLargerThan1100] = useMediaQuery("(min-width: 1100px)");
  return (
    <Flex
      flexDirection={isLargerThan1100 ? "row" : "column"}
      gap={isLargerThan1100 ? "8" : "0"}
      alignItems={"center"}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={{ base: "100px", lg: "200px" }}
        width={{ base: "160px", md: "250px", lg: "350px" }}>
        <Text
          fontSize="2xl"
          color="red.500">
          Error: Failed to load data.
        </Text>
      </Box>
      <TableContainer>
        <Table
          bg="white"
          variant="simple">
          <Thead>
            <Tr>
              <Th>Language</Th>
              <Th isNumeric>Contribution</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr fontSize={{ base: "sm", md: "md" }}>
              <Td>
                <Text color="red.500">Error: Failed to load data.</Text>
              </Td>
              <Td isNumeric>
                <Text color="red.500">Error: Failed to load data.</Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default LanguageDataError;
