import { Flex, Text, FlexProps } from "@chakra-ui/react";

import Info from "./Info";

interface BioProps extends FlexProps {
  bio: string;
  info: {
    countries: number;
    languages: number;
    cities: number;
  },
}

function Bio({ bio, info, ...rest }: BioProps) {
  return (
    <Flex
      px={["16px", "140px"]}
      flexDir={["column", "row"]}
      {...rest}
    >
      <Text
        w={["100%", "52%"]}
        fontWeight={400}
        fontSize={["14px", "24px"]}
        textAlign="justify"
      >
        {bio}
      </Text>

      <Info mt={["16px", 0]} ml={[0, "70px"]} countries={info.countries} languages={info.languages} cities={info.cities} />
    </Flex>
  );
}

export default Bio;