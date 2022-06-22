import { Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

function Header(): JSX.Element {
  return (
    <Link href="/" passHref>
      <ChakraLink>
        <Flex
          as="header"
          w="100%"
          maxW={["100%", 1440]}
          h={["50px", "100px"]}
          mx="auto"
          px="6"
          align="center"
          justify="center"
        >
          <Image
            src="/images/logo.svg"
            alt="logo"
            h={["20px", "45px"]}
            w={["81px", "184px"]}
          />
        </Flex>
      </ChakraLink>
    </Link>
  )
}

export default Header;