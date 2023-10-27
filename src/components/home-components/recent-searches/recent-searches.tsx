import { useEffect } from "react";
import { Box, Grid, Heading, useToast } from "@chakra-ui/react";
import { useGetUsers } from "../../../services/userServices";
import RecentSearchLink from "./recent-searches-link";
import RecentSearchesLinkSkeleton from "./recent-searches-link-skeleton";
import RecentSearchesLinkError from "./recent-searches-link-error";

const RecentSearches = () => {
  const users: string[] = JSON.parse(
    localStorage.getItem("previousSearchArray") || "[]"
  );

  const { data, isError, isLoading, isSuccess, error } = useGetUsers(users);
  const toast = useToast();

  useEffect(() => {
    if (error?.response?.status === 500) {
      toast({
        title: "Internal server error",
        description: "Github API error",
        status: "error",
        duration: 6000,
        isClosable: true,
      });
    }
  }, [toast, error?.response?.status]);

  return (
    <Box mt={"10"}>
      <Heading
        mb={"10"}
        textAlign={"center"}
        as={"h2"}>
        Recent searches
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
              key={user.id}
            />
          ))}
      </Grid>
    </Box>
  );
};

export default RecentSearches;
