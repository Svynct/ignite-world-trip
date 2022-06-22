import { Box, Flex, FlexProps, SimpleGrid, Image, Text, Avatar, Stack } from "@chakra-ui/react";

interface CitiesProps extends FlexProps {
  cities: {
    city: string;
    country: string;
    image: string;
    flag: string;
  }[];
  total: number;
}

function Cities({ cities, total, ...rest }: CitiesProps) {
  return (
    <Flex
      w="100%"
      flexDir="column"
      {...rest}
    >
      <Text
        pl={["16px", "140px"]}
        fontSize={["24px", "36px"]}
        fontWeight={500}
        textAlign="start"
      >
        Cidades +{total}
      </Text>

      <SimpleGrid
        mt={["20px", "40px"]}
        gap={["20px", "45px"]}
        columns={[1, 4]}
        mx="auto"
      >
        {cities.map(city => (
          <Box
            w="256px"
            h="279px"
            borderRadius="4px"
            key={city.city}
          >
            <Image src={`/images/cities/${city.image}`} alt={city.city} h="173px" w="100%" objectFit="cover" borderRadius="4px 4px 0 0" />

            <Flex
              h="100px"
              px="24px"
              align="center"
              justify="space-between"
              border="1px solid rgba(255, 186, 8, 0.5)"
              borderRadius="0 0 4px 4px"
            >
              <Stack>
                <Text
                  fontSize="20px"
                  fontWeight={600}
                >
                  {city.city}
                </Text>
                <Text
                  fontSize="16px"
                  fontWeight={500}
                  color="gray.500"
                >
                  {city.country}
                </Text>
              </Stack>

              <Avatar src={`/images/flags/${city.flag}`} name={city.country} w="30px" h="30px" />
            </Flex>
          </Box>
        ))}

      </SimpleGrid>
    </Flex>
  );
}

export default Cities;