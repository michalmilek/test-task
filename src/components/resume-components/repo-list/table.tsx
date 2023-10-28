import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  chakra,
  Button,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import { RepositoryInfoResponse } from "../../../utils/types";
import { columns as columns2 } from "./table-creation";

import "@tanstack/react-table";


const ReposTable = ({ repos }: { repos: RepositoryInfoResponse[] }) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const columns = useMemo(() => columns2, []);

  const table = useReactTable({
    columns,
    data: repos,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <TableContainer>
      <Table
        aria-label="Repositories table"
        aria-describedby="repositories-table-description"
        variant="striped"
        colorScheme="teal">
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const meta = header.column.columnDef.meta;

                return (
                  <Th
                    aria-sort={
                      sorting.length > 0 && sorting[0].id === header.id
                        ? sorting[0].desc
                          ? "descending"
                          : "ascending"
                        : undefined
                    }
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    isNumeric={meta?.isNumeric}>
                    <Button
                      variant={"unstyled"}
                      fontSize={"sm"}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      <chakra.span pl="4">
                        {header.column.getIsSorted() ? (
                          header.column.getIsSorted() === "desc" ? (
                            <TriangleDownIcon aria-label="sorted descending" />
                          ) : (
                            <TriangleUpIcon aria-label="sorted ascending" />
                          )
                        ) : null}
                      </chakra.span>
                    </Button>
                  </Th>
                );
              })}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={"table " + row.id}>
              {row.getVisibleCells().map((cell) => {
                const meta = cell.column.columnDef.meta;
                return (
                  <Td
                    key={cell.id}
                    isNumeric={meta?.isNumeric}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ReposTable;
