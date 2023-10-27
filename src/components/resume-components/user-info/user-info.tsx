import { Box, Button, Flex, Icon, Image, Link, Text } from "@chakra-ui/react";
import { RepositoryInfoResponse, UserResponse } from "../../../utils/types";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const UserInfo = ({
  user,
  repos,
}: {
  user: UserResponse;
  repos: RepositoryInfoResponse[];
}) => {
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
      if (languageSizes.has(repo.language)) {
        languageSizes.set(
          repo.language,
          languageSizes.get(repo.language)! + repo.size
        );
      } else {
        languageSizes.set(repo.language, repo.size);
      }
    });

    const aggregatedData: Repository[] = [];
    languageSizes.forEach((size, language) => {
      const percentage = (size / totalSize) * 100;
      aggregatedData.push({ size: percentage, language });
    });

    return aggregatedData;
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}>
      <Flex
        alignItems="center"
        gap={"8"}
        mb={4}>
        <Image
          src={avatar_url}
          alt={login}
          rounded={"lg"}
          border={"2px solid"}
          borderColor={"gray.400"}
          shadow={"xl"}
          boxSize="150px"
          mr={2}
        />
        <Link
          href={html_url}
          isExternal
          fontSize="5xl">
          {login}
        </Link>
      </Flex>
      {name && (
        <Text
          fontWeight="bold"
          fontSize={"lg"}
          mb={2}>
          {name}
        </Text>
      )}
      <Text
        fontSize={"md"}
        mb={2}>
        Joined on {new Date(created_at).toLocaleDateString(i18n.language)}
      </Text>
      <Flex>
        <Link
          href={html_url}
          isExternal
          mr={4}>
          <Button colorScheme="gray">GitHub</Button>
        </Link>
        {twitter_username && (
          <Link
            href={`https://twitter.com/${twitter_username}`}
            isExternal>
            <Button colorScheme="twitter">Twitter</Button>
          </Link>
        )}
        {blog && (
          <Link
            href={blog}
            isExternal
            ml={4}>
            <Button colorScheme="blue">Portfolio</Button>
          </Link>
        )}
      </Flex>
    </Box>
  );
};

export default UserInfo;
