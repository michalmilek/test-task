import {
  Input as ChakraInput,
  useColorMode,
  InputProps,
} from "@chakra-ui/react";

const Input = (props: InputProps) => {
  const { colorMode } = useColorMode();
  const colorScheme = colorMode === "light" ? "teal" : "purple";
  const placeholderColor = colorMode === "light" ? "gray.600" : "gray.400";

  return (
    <ChakraInput
      colorScheme={colorScheme}
      _placeholder={{ color: placeholderColor }}
      {...props}
    />
  );
};

export default Input;
