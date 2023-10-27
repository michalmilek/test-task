import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { RepositoryInfoResponse, UserResponse } from "../../../utils/types";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Example from "./chart";
import Link from "../../ui/link";

export interface Repository {
  size: number;
  language: string;
}

const UserInfo = ({
  user,
  repos,
}: {
  user: UserResponse;
  repos: RepositoryInfoResponse[];
}) => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const {
    name,
    created_at,
    html_url,
    twitter_username,
    blog,
    avatar_url,
    login,
  } = user;

  const { i18n } = useTranslation();

  const [data, setData] = useState<Repository[]>([]);

  useEffect(() => {
    const processedData = processData(repos);
    setData(processedData);
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
      w={"full"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={isLargerThan600 ? "row" : "column"}
      gap={isLargerThan600 ? 8 : 2}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={{ base: 8, lg: 4 }}>
      <Flex
        flexDirection={"column"}
        alignItems="center"
        gap={isLargerThan600 ? "8" : "2"}
        mb={4}>
        <Image
          src={avatar_url}
          alt={login}
          rounded={"lg"}
          border={"2px solid"}
          borderColor={"gray.400"}
          shadow={"xl"}
          boxSize={{ base: "100px", lg: "150px" }}
          mr={2}
        />
        <Link
          to={html_url}
          isExternal
          fontSize={{ sm: "2xl", lg: "5xl" }}>
          {login}
        </Link>

        {name && (
          <Heading
            as={"h2"}
            fontWeight="bold"
            fontSize={"lg"}
            mb={2}>
            {name}
          </Heading>
        )}
        <Text
          fontSize={"md"}
          mb={2}>
          Joined on {new Date(created_at).toLocaleDateString(i18n.language)}
        </Text>
        <Flex
          flexDirection={{ base: "row", md: "column", lg: "row" }}
          gap={4}
          alignItems={"center"}
          justifyContent={"center"}>
          <Link
            to={html_url}
            isExternal>
            <Button
              tabIndex={-1}
              colorScheme="gray">
              GitHub
            </Button>
          </Link>
          {twitter_username && (
            <Link
              to={`https://twitter.com/${twitter_username}`}
              isExternal>
              <Button
                tabIndex={-1}
                colorScheme="twitter">
                Twitter
              </Button>
            </Link>
          )}
          {blog && (
            <Link
              to={blog}
              isExternal>
              <Button
                tabIndex={-1}
                colorScheme="blue">
                Portfolio
              </Button>
            </Link>
          )}
        </Flex>
      </Flex>
      {data.length > 0 && <Example data={data} />}
    </Flex>
  );
};

export default UserInfo;
