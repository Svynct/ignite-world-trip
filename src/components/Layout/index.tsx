import { Flex, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";

import Header from "../Header";

interface LayoutProps extends FlexProps {
  children: ReactNode;
}

function Layout({ children, ...rest }: LayoutProps) {
  return (
    <Flex
      flexDir="column"
      justify="center"
      align="center"
      maxW={["100%", 1440]}
      mx="auto"
      mb={["16px", "35px"]}
      {...rest}
    >
      <Header />
      {children}
    </Flex>
  );
}

export default Layout;