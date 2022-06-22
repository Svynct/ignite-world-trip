import { Flex, GridItem, GridItemProps, Image, Text } from "@chakra-ui/react";

interface TypeProps extends GridItemProps {
  image: string;
  text: string;
  isMobile?: boolean;
}

function Type({ image, text, isMobile = false, ...rest }: TypeProps) {
  if (isMobile) {
    return (
      <Flex
        align="center"
        justify="flex-start"
        {...rest}
      >
        <Image
          w="8px"
          h="8px"
          src={image}
          alt={text}
        />
        <Text
          ml="8px"
          fontWeight={500}
          fontSize="18px"
        >
          {text}
        </Text>
      </Flex>
    );
  }

  return (
    <GridItem
      align="center"
      justify="center"
      {...rest}
    >
      <Image
        src={image}
        alt={text}
      />
      <Text
        mt="24px"
        fontWeight={600}
        fontSize="24px"
      >
        {text}
      </Text>
    </GridItem>
  );
}

export default Type;