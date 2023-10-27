import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Icon,
  Tooltip,
  Box,
  Heading,
  Flex,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { RepositoryInfoResponse } from "../../../utils/types";
import { useTranslation } from "react-i18next";
import { FaStar, FaEye, FaExclamationCircle } from "react-icons/fa";
import Link from "../../ui/link";

const RepoList = ({ repos }: { repos: RepositoryInfoResponse[] }) => {
  const { i18n } = useTranslation();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(i18n.language);
  };

  return (
    <Box mt={8}>
      <Flex
        alignItems={"center"}
        gap={4}
        my={6}
        ml={4}>
        <Heading as={"h1"}>Repositories</Heading>
        <Popover>
          <PopoverTrigger>
            <Button>How to use table?</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Table additional informations</PopoverHeader>
            <PopoverBody>
              If you want to sort the data in a table, press on the element
              describing the column.
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
      <TableContainer>
        <Table
          variant="striped"
          colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th>Language</Th>
              <Th>Created At</Th>
              <Th>Updated At</Th>
              <Th>
                <Tooltip label="Stargazers Count">
                  <Icon as={FaStar} />
                </Tooltip>
              </Th>
              <Th>
                <Tooltip label="Watchers Count">
                  <Icon as={FaEye} />
                </Tooltip>
              </Th>
              <Th>
                <Tooltip className="Open Issues Count">
                  <Icon as={FaExclamationCircle} />
                </Tooltip>
              </Th>
              <Th>HTML URL</Th>
              <Th>Clone URL</Th>
              <Th>Commits URL</Th>
              <Th>Branches URL</Th>
            </Tr>
          </Thead>
          <Tbody>
            {repos.map((item) => (
              <Tr key={"table " + item.name}>
                <Td>{item.name}</Td>
                <Td>{item.description}</Td>
                <Td>{item.language || "Unrecognized"}</Td>
                <Td>{formatDate(item.created_at)}</Td>
                <Td>{formatDate(item.updated_at)}</Td>
                <Td>{item.stargazers_count}</Td>
                <Td>{item.watchers_count}</Td>
                <Td>{item.open_issues_count}</Td>
                <Td>
                  <Link
                    to={item.html_url}
                    isExternal>
                    Repo
                  </Link>
                </Td>
                <Td>
                  <Link
                    to={item.clone_url}
                    isExternal>
                    Clone
                  </Link>
                </Td>
                <Td>
                  <Link
                    to={item.commits_url}
                    isExternal>
                    Commits
                  </Link>
                </Td>
                <Td>
                  <Link
                    to={item.branches_url}
                    isExternal>
                    Branches
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RepoList;
