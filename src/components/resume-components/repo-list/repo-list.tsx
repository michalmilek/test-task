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
import ReposTable from "./table";

const RepoList = ({ repos }: { repos: RepositoryInfoResponse[] }) => {
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
      <ReposTable repos={repos} />
    </Box>
  );
};

export default RepoList;
