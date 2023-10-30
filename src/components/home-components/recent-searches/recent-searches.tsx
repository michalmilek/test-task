import { Box, Grid, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { useGetUsers } from "src/services/userServices";
import RecentSearchLink from "./recent-searches-link";
import RecentSearchesLinkSkeleton from "./recent-searches-link-skeleton";
import RecentSearchesLinkError from "./recent-searches-link-error";

const RecentSearches = () => {
  const { t } = useTranslation();
  const users: string[] = JSON.parse(
    localStorage.getItem("previousSearchArray") || "[]"
  );

  const { data, isError, isLoading, isSuccess } = useGetUsers(users);

  if (users.length === 0) {
    return null;
  }

  return (
    <Box mt={"10"}>
      <Heading
        mb={"10"}
        textAlign={"center"}
        as={"h2"}>
        {t("recentSearches.recentSearches")}
      </Heading>
      <Grid
        px={"10"}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={6}>
        {isError &&
          users.length > 0 &&
          users.map((user) => (
            <RecentSearchesLinkError key={user + " error"} />
          ))}
        {isLoading &&
          users.length > 0 &&
          users.map((user) => (
            <RecentSearchesLinkSkeleton key={user + " skeleton"} />
          ))}
        {data &&
          isSuccess &&
          data?.map((user) => (
            <RecentSearchLink
              user={user}
              key={user.id + "recent searches"}
            />
          ))}
      </Grid>
    </Box>
  );
};

export default RecentSearches;
