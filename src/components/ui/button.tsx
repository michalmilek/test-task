import {
  Button as ChakraButton,
  useColorMode,
  ButtonProps,
} from "@chakra-ui/react";

const Button = (props: ButtonProps) => {
  const { colorMode } = useColorMode();
  const colorScheme = colorMode === "light" ? "teal" : "purple";

  return (
    <ChakraButton
      colorScheme={colorScheme}
      {...props}>
      {props.children}
    </ChakraButton>
  );
};

export default Button;
