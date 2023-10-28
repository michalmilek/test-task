import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { getUser, getUserRepos, getUsers } from "./user";

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: AxiosError;
  }
}

export const useGetUserManual = (username: string) => {
  const response = useQuery({
    queryKey: ["user", username],
    queryFn: () => getUser(username),
    enabled: false,
    retry: false,
  });

  return response;
};

export const useGetUsers = (usernames: string[]) => {
  const response = useQuery({
    queryKey: ["users", usernames],
    queryFn: () => getUsers(usernames),
    enabled: usernames.length > 0,
    retry: false,
  });

  return response;
};

export const useGetUserAuto = (username: string | undefined) => {
  const response = useQuery({
    queryKey: ["user", username],
    queryFn: () => getUser(username as string),
    enabled: !!username,
    retry: false,
  });

  return response;
};

export const useGetUserRepos = (username: string | undefined) => {
  const response = useQuery({
    queryKey: ["userRepos", username],
    queryFn: () => getUserRepos(username as string),
    enabled: !!username,
    retry: false,
  });

  return response;
};
