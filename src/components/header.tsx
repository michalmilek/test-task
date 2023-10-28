import {
  useColorMode,
  Flex,
  Spacer,
  Button as ChakraButton,
  useMediaQuery,
  chakra,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { ArrowBackIcon, SunIcon } from "@chakra-ui/icons";
import { useMemo } from "react";

import Button from "./ui/button";
import { Language } from "../utils/types";
import { useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "./breadcrumbs";

function Header() {
  const [isLargerThan550] = useMediaQuery("(min-width: 550px)");
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = colorMode === "light" ? "gray.100" : "gray.500";
  const location = useLocation();
  const isBackBtnVisible = useMemo(
    () => location.pathname !== "/",
    [location.pathname]
  );
  const { i18n } = useTranslation();

  const changeLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Flex
      key={location.pathname + "path"}
      as={"header"}
      bg={bgColor}
      shadow={"md"}
      p={{ base: 2, md: 4 }}>
      <Flex
        gap={{ base: 2, lg: 4 }}
        alignItems={"center"}>
        {isBackBtnVisible && (
          <ChakraButton
            fontSize={{ base: "sm", md: "lg" }}
            onClick={() => navigate("/")}
            leftIcon={<ArrowBackIcon fontSize={"2xl"} />}>
            Back
          </ChakraButton>
        )}

        <Breadcrumbs />
      </Flex>
      <Spacer />
      <Flex gap={{ base: "1", md: "2" }}>
        <ChakraButton
          fontSize={{ base: "2xs", md: "lg" }}
          aria-label="Switch to English"
          onClick={() => changeLanguage("en")}>
          EN
        </ChakraButton>
        <ChakraButton
          fontSize={{ base: "2xs", md: "lg" }}
          aria-label="Przełącz na polski"
          onClick={() => changeLanguage("pl")}>
          PL
        </ChakraButton>
        <Button
          display={"flex"}
          alignItems={"center"}
          gap={2}
          fontSize={{ base: "sm", md: "lg" }}
          aria-label="Change theme site"
          onClick={toggleColorMode}>
          <SunIcon />
          {isLargerThan550 && (
            <chakra.span>
              {colorMode === "light" ? "Dark mode" : "Light mode"}
            </chakra.span>
          )}
        </Button>
      </Flex>
    </Flex>
  );
}

export default Header;
