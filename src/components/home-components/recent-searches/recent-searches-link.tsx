import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { UserResponse } from "../../../utils/types";

const RecentSearchLink = ({ user }: { user: UserResponse }) => {
  const { colorMode } = useColorMode();
  const bgHover = colorMode === "dark" ? "gray.400" : "gray.300";
  return (
    <Link href={`/resume/${user.login}`}>
      <GridItem
        gridRow={1}
        display={{ base: "grid", md: "flex" }}
        gridTemplateColumns={"1fr 1fr 1fr"}
        alignItems={"center"}
        justifyContent={{ md: "flex-start" }}
        gap={{ base: "2", md: "8" }}
        transition={"all 0.3s ease"}
        cursor={"pointer"}
        _hover={{
          background: bgHover,
        }}>
        <Image
          justifySelf={"center"}
          gridColumn={2}
          rounded={"full"}
          boxSize={{ base: "50px", sm: "100px" }}
          objectFit="cover"
          src={user.avatar_url}
          alt={user.login + " avatar"}
          border="4px"
          borderColor="gray.200"
        />
        <Box
          gridColumn={2}
          display={"flex"}
          h={"100%"}
          flexDirection={"column"}
          justifyContent={{ base: "center", md: "space-between" }}
          alignItems={{ base: "center", md: "space-between" }}>
          <Text
            fontSize={"lg"}
            fontWeight={"bold"}>
            {user.login}
          </Text>
          <Text>{user.name}</Text>
        </Box>
      </GridItem>
    </Link>
  );
};

export default RecentSearchLink;
