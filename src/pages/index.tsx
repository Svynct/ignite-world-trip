import { Divider, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'

import Banner from '../components/Banner'
import Continents from '../components/Continents'
import Layout from '../components/Layout'
import TravelTypes from '../components/TravelTypes'

const Home: NextPage = () => {
  return (
    <Layout>
      <Banner mb={["36px", "80px"]} />
      <TravelTypes mb={["36px", "80px"]} />

      <Divider
        w="90px"
        borderColor="gray.700"
        borderBottomWidth="2px"
      />

      <Text
        my={["24px", "52px"]}
        fontSize={["20px", "36px"]}
        fontWeight={500}
        textAlign="center"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>

      <Continents />
    </Layout>
  )
}

export default Home
