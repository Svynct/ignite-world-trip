import { Flex, Text, FlexProps } from "@chakra-ui/react";

interface BannerProps extends FlexProps {
  image: string;
  title: string;
}

function Banner({ image, title, ...rest }: BannerProps) {
  return (
    <Flex
      w="100%"
      h={["150px", "500px"]}
      mx="auto"
      maxW={["100%", 1440]}
      justify={["center", "flex-start"]}
      align="center"
      px={[0, "140px"]}
      py={0}
      backgroundImage={image}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      {...rest}
    >
      <Text
        mt={[0, "315px"]}
        fontWeight={600}
        fontSize={["28px", "48px"]}
        color="gray.100"
      >
        {title}
      </Text>
    </Flex>
  );
}

export default Banner;