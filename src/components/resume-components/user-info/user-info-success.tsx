import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import Link from "src/components/ui/link";
import { UserResponse } from "src/utils/types";

const UserInfoSuccess = ({ user }: { user: UserResponse }) => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const { i18n, t } = useTranslation();
  const {
    name,
    created_at,
    html_url,
    twitter_username,
    blog,
    avatar_url,
    login,
  } = user;
  return (
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
        as={"span"}
        fontSize={"md"}
        mb={2}>
        {t("userInfo.joinedAt")}{" "}
        {new Date(created_at).toLocaleDateString(i18n.language)}
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
  );
};

export default UserInfoSuccess;
