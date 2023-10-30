import {
  LinkProps as ChakraLinkProps,
  Link as ChakraLink,
} from "@chakra-ui/react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

type ChakraRouterLinkProps = ChakraLinkProps & RouterLinkProps;

const Link = (props: ChakraRouterLinkProps) => {
  return (
    <ChakraLink
      textDecoration={"underline"}
      as={RouterLink}
      {...props}>
      {props.children}
    </ChakraLink>
  );
};

export default Link;
