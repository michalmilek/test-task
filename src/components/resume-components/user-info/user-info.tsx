import { Flex, useMediaQuery } from "@chakra-ui/react";
import { RepositoryInfoResponse, UserResponse } from "../../../utils/types";
import { useEffect, useState } from "react";
import UserInfoSuccess from "./user-info-success";
import LanguageData from "./language-data";
import LanguageDataSkeleton from "./language-data-skeleton";
import UserInfoSkeleton from "./user-info-skeleton";
import UserInfoError from "./user-info-error";
import LanguageDataError from "./language-data-error";

export interface Repository {
  size: number;
  language: string;
}

const UserInfo = ({
  user,
  repos,
  isLoading,
  isError,
  isSuccessForUserInfo,
}: {
  user: UserResponse | undefined;
  repos: RepositoryInfoResponse[] | undefined;
  isLoading: boolean;
  isError: boolean;
  isSuccessForUserInfo: boolean;
}) => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  const [data, setData] = useState<Repository[]>([]);

  useEffect(() => {
    if (repos) {
      const processedData = processData(repos);
      setData(processedData);
    }
  }, [repos]);

  const processData = (data: Repository[]): Repository[] => {
    const languageSizes = new Map<string, number>();
    let totalSize = 0;

    data.forEach((repo) => {
      totalSize += repo.size;
      const language = repo.language || "Unrecognized";
      if (languageSizes.has(language)) {
        languageSizes.set(language, languageSizes.get(language)! + repo.size);
      } else {
        languageSizes.set(language, repo.size);
      }
    });

    const aggregatedData: Repository[] = [];
    languageSizes.forEach((size, language) => {
      const percentage = (size / totalSize) * 100;
      aggregatedData.push({ size: percentage, language });
    });

    aggregatedData.sort((a, b) => b.size - a.size);

    return aggregatedData;
  };

  return (
    <Flex
      as={"div"}
      w={"full"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={isLargerThan600 ? "row" : "column"}
      gap={isLargerThan600 ? 8 : 2}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={{ base: 8, lg: 4 }}>
      {isLoading && (
        <>
          <UserInfoSkeleton />
          <LanguageDataSkeleton />
        </>
      )}
      {isError && (
        <>
          <UserInfoError />
          <LanguageDataError />
        </>
      )}

      {isSuccessForUserInfo && user && data && <UserInfoSuccess user={user} />}
      {isSuccessForUserInfo && user && data.length > 0 && (
        <LanguageData data={data} />
      )}
    </Flex>
  );
};

export default UserInfo;
