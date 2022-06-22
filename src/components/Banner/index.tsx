import { Box, Flex, FlexProps, Image, Text, useBreakpointValue } from "@chakra-ui/react";

function Banner({ ...rest }: FlexProps) {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })

  return (
    <Flex
      w="100%"
      h={["163px", "335px"]}
      mx="auto"
      maxW={["100%", 1440]}
      justify="space-between"
      align="center"
      px={["16px", "140px"]}
      backgroundImage="/images/backgrounds/banner.svg"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      {...rest}
    >
      <Box
        my={["28px", "70px"]}
      >
        <Text
          mt="10px"
          fontWeight={500}
          fontSize={["20px", "48px"]}
          color="gray.100"
        >
          5 Continentes, <br /> infinitas possibilidades.
        </Text>
        <Text
          fontSize={["16px", "20px"]}
          fontWeight={400}
          mt={["8px", "20px"]}
          color="gray.200"
          maxW={["100%", "524px"]}
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>

      {!isMobile && (
        <Image
          src="/images/airplane.svg"
          alt="airplane"
          transform="rotate(3deg)"
          mt="74px"
        />
      )}
    </Flex>
  );
}

export default Banner;