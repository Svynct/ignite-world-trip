import { Flex, Text, FlexProps, Image } from "@chakra-ui/react";

interface InfoProps extends FlexProps {
  countries: number;
  languages: number;
  cities: number;
}

function Info({ countries, languages, cities, ...rest }: InfoProps) {
  return (
    <Flex
      align={["start", "center"]}
      justify={["start", "center"]}
      textAlign={["start", "center"]}
      {...rest}
    >
      <Text
        color="yellow.500"
        fontSize={["24px", "48px"]}
        fontWeight={600}
      >
        {countries}
        <Text
          color="gray.700"
          fontSize={["18px", "24px"]}
        >
          países
        </Text>
      </Text>

      <Text
        color="yellow.500"
        fontSize={["24px", "48px"]}
        fontWeight={600}
        pl="42px"
      >
        {languages}
        <Text
          color="gray.700"
          fontSize={["18px", "24px"]}
        >
          línguas
        </Text>
      </Text>

      <Text
        color="yellow.500"
        fontSize={["24px", "48px"]}
        fontWeight={600}
        px={[0, "42px"]}
        pl="42px"
      >
        {cities}
        <Text
          display="flex"
          color="gray.700"
          fontSize={["18px", "24px"]}
        >
          cidades +100
          <Image ml="5px" mt="auto" mb="auto" src="/images/icons/info.svg" w={["10px", "16px"]} h={["10px", "16px"]} alt="info" />
        </Text>
      </Text>
    </Flex >
  );
}

export default Info;