import { Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface ContinentSlideProps {
  title: string;
  description: string;
  background: string;
  link: string;
}

function ContinentSlide({ title, description, background, link }: ContinentSlideProps) {
  return (
    <Link href={link} passHref>
      <ChakraLink _hover={{
        textDecor: "none"
      }}>
        <Flex
          w={["100%", "1240px"]}
          h={["250px", "450px"]}
          mx="auto"
          align="center"
          justify="center"
          fontWeight={700}
          color="gray.100"
          flexDir="column"
          objectFit="cover"
          backgroundImage={background}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          <Text fontSize={["24px", "48px"]}>
            {title}
          </Text>
          <Text fontSize={["14px", "24px"]} mt={["12px", "16px"]}>
            {description}
          </Text>
        </Flex>
      </ChakraLink>
    </Link>
  );
}

export default ContinentSlide;