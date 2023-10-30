import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import colors from "./langColors.json";
import { Repository } from "src/utils/types";

const LanguageData = ({ data }: { data: Repository[] }) => {
  const { t } = useTranslation();
  const [isLargerThan650] = useMediaQuery("(min-width: 650px)");
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Flex
      flexDirection={isLargerThan650 ? "row" : "column"}
      gap={isLargerThan650 ? "8" : "2"}
      alignItems={"center"}>
      <Box
        height={isLargerThan650 ? "300px" : "200px"}
        width={{ sm: "160px", md: "250px", lg: "350px" }}>
        <ResponsiveContainer
          minHeight={"100px"}
          minWidth={"150px"}
          width={"100%"}
          height={"100%"}>
          <PieChart
            width={isLargerThan650 ? 100 : 60}
            height={isLargerThan650 ? 100 : 60}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={isLargerThan768 ? 80 : 60}
              fill="#8884d8"
              dataKey="size">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={(colors as Record<string, string>)[entry.language]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Box>
      <TableContainer>
        <Table
          bg={"white"}
          variant="simple">
          <Thead>
            <Tr>
              <Th>{t("languageData.language")}</Th>
              <Th isNumeric>{t("languageData.contribution")}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((item) => (
              <Tr
                color={(colors as Record<string, string>)[item.language]}
                key={item.language + item.size}>
                <Td>{item.language}</Td>
                <Td isNumeric>{item.size.toFixed(2)}%</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default LanguageData;
