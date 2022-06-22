import { Flex, FlexProps, Grid, HStack, useBreakpointValue } from "@chakra-ui/react";

import Type from "./Type";

function TravelTypes({ ...rest }: FlexProps) {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })

  return (
    <Flex
      maxW={1440}
      align="center"
      justify="center"
      mx="auto"
      {...rest}
    >
      {isMobile && (
        <Flex flexDir="column" px="50px" rowGap="27px">
          <HStack gap="79px">
            <Type image="/images/icons/dot.svg" text="vida noturna" isMobile={isMobile} />
            <Type image="/images/icons/dot.svg" text="praia" isMobile={isMobile} />
          </HStack>
          <HStack gap="79px">
            <Type image="/images/icons/dot.svg" text="moderno" isMobile={isMobile} />
            <Type image="/images/icons/dot.svg" text="clássico" isMobile={isMobile} />
          </HStack>
          <Type image="/images/icons/dot.svg" text="e mais..." isMobile={isMobile} alignSelf="center" />
        </Flex>
      )}

      {!isMobile && (
        <Grid templateColumns='repeat(5, 1fr)' gap="130px">
          <Type image="/images/icons/cocktail.svg" text="vida noturna" isMobile={isMobile} />
          <Type image="/images/icons/surf.svg" text="praia" isMobile={isMobile} />
          <Type image="/images/icons/building.svg" text="moderno" isMobile={isMobile} />
          <Type image="/images/icons/museum.svg" text="clássico" isMobile={isMobile} />
          <Type image="/images/icons/earth.svg" text="e mais..." isMobile={isMobile} />
        </Grid>
      )}
    </Flex >
  );
}

export default TravelTypes;