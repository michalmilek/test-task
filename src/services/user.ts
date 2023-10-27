import { RepositoryInfoResponse, UserResponse } from "../utils/types";
import axiosInstance from "./axios";

export const getUser = async (username: string) => {
  try {
    const response = await axiosInstance.get<UserResponse>(
      `/users/${username}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUsers = async (usernames: string[]) => {
  try {
    const users = [];

    for (const username of usernames) {
      const response = await axiosInstance.get<UserResponse>(
        `/users/${username}`
      );
      users.push(response.data);
    }

    return users;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUserRepos = async (username: string) => {
  try {
    const response = await axiosInstance.get<RepositoryInfoResponse[]>(
      `/users/${username}/repos`
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
