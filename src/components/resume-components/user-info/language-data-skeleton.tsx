import {
  Box,
  Flex,
  SkeletonCircle,
  Table,
  TableContainer,
  useMediaQuery,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Skeleton,
} from "@chakra-ui/react";

const LanguageDataSkeleton = () => {
  const [isLargerThan650] = useMediaQuery("(min-width: 680px)");
  const [isLargerThan1100] = useMediaQuery("(min-width: 1100px)");
  return (
    <Flex
      flexDirection={isLargerThan650 ? "row" : "column"}
      gap={isLargerThan1100 ? "8" : "2"}
      alignItems={"center"}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={isLargerThan650 ? "200px" : "150px"}
        width={{ sm: "160px", md: "250px" }}>
        <SkeletonCircle
          size={"100px"}
          startColor="pink.500"
          endColor="orange.500"
        />
      </Box>
      <TableContainer>
        <Table
          bg={"white"}
          variant="simple">
          <Thead>
            <Tr>
              <Th>Language</Th>
              <Th isNumeric>Contribution</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Skeleton width={100} />
              </Td>
              <Td isNumeric>
                <Skeleton width={50} />
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Skeleton width={100} />
              </Td>
              <Td isNumeric>
                <Skeleton width={50} />
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Skeleton width={100} />
              </Td>
              <Td isNumeric>
                <Skeleton width={50} />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default LanguageDataSkeleton;
