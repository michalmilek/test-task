import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Link from "src/components/ui/link";
import { routesOb } from "src/router/routes";

const WrongPageError = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  const { t } = useTranslation();

  useEffect(() => {
    let countdownId: number | undefined;
    if (countdown > 0) {
      countdownId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else {
      navigate(routesOb.home.path);
    }
    return () => clearInterval(countdownId);
  }, [countdown, navigate]);

  return (
    <Box
      textAlign="center"
      mt={20}>
      <Heading
        size="lg"
        mb={4}>
        {t("wrongPage.error")}
      </Heading>
      <Text fontSize="xl">
        {t("wrongPage.notExist")}
        <br /> {t("wrongPage.redirect", { countdown })}
      </Text>
      <Link
        fontSize={"xl"}
        to={"/"}>
        {t("wrongPage.click")}
      </Link>
    </Box>
  );
};

export default WrongPageError;
