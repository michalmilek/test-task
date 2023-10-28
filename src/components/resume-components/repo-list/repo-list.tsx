import {
  Box,
  Heading,
  Flex,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { RepositoryInfoResponse } from "../../../utils/types";
import ReposTable from "./repos-table";
import ReposTableSkeleton from "./repos-table-skeleton";
import ReposTableError from "./repos-table-error";
import ReposNoRepos from "./repos-no-repos";

const RepoList = ({
  repos,
  isLoading,
  isError,
  isSuccess,
}: {
  repos: RepositoryInfoResponse[] | undefined;
  isLoading: boolean;
  isError: boolean;
  isSuccess: Repos;
}) => {
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
      {isError && <ReposTableError />}
      {isLoading && <ReposTableSkeleton />}
      {isSuccess && repos && repos.length > 0 && <ReposTable repos={repos} />}
      {isSuccess && repos && repos.length === 0 && <ReposNoRepos />}
    </Box>
  );
};

export default RepoList;
