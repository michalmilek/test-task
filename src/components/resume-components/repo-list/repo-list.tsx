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
import { useTranslation } from "react-i18next";

import { RepositoryInfoResponse } from "src/utils/types";
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
  isSuccess: boolean;
}) => {
  const { t } = useTranslation();
  return (
    <Box mt={8}>
      <Flex
        alignItems={"center"}
        gap={4}
        my={6}
        ml={4}>
        <Heading as={"h1"}>{t("repoList.repositories")}</Heading>
        <Popover>
          <PopoverTrigger>
            <Button>{t("repoList.howToUse")}</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>
              {t("repoList.tableAdditionalInformations")}
            </PopoverHeader>
            <PopoverBody>{t("repoList.tableDescription")}</PopoverBody>
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
