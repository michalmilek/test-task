import {
  useColorMode,
  Flex,
  Spacer,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useMemo } from "react";

import Button from "./ui/button";
import { Language } from "../utils/types";
import { useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "./breadcrumbs";

function Header() {
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
      p={4}>
      <Flex
        gap={4}
        alignItems={"center"}>
        {isBackBtnVisible && (
          <ChakraButton
            onClick={() => navigate("/")}
            leftIcon={<ArrowBackIcon fontSize={"2xl"} />}>
            Back
          </ChakraButton>
        )}

        <Breadcrumbs />
      </Flex>
      <Spacer />
      <Flex gap={"2"}>
        <ChakraButton
          aria-label="Switch to English"
          onClick={() => changeLanguage("en")}>
          EN
        </ChakraButton>
        <ChakraButton
          aria-label="Przełącz na polski"
          onClick={() => changeLanguage("pl")}>
          PL
        </ChakraButton>
        <Button
          aria-label="Change theme site"
          onClick={toggleColorMode}>
          {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button>
      </Flex>
    </Flex>
  );
}

export default Header;
