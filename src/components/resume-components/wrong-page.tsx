import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Link from "../ui/link";

const WrongPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    let countdownId: number | undefined;
    if (countdown > 0) {
      countdownId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else {
      navigate("/");
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
        Oops! Wrong page.
      </Heading>
      <Text fontSize="xl">
        The page you are looking for does not exist.
        <br /> You will be redirected to the home page in {countdown} seconds.
      </Text>
      <Link
        fontSize={"xl"}
        to={"/"}>
        Click to redirect now.
      </Link>
    </Box>
  );
};

export default WrongPage;
