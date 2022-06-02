import type { NextPage } from "next"
import React from "react"
import { Container, Heading } from "@chakra-ui/react"
import Layout from "@components/Layout"
import Helmet from "@components/Helmet"
import colors from "@constants/colors"

const Home: NextPage = () => {
  return (
    <Layout>
      <Helmet title="Next.js TypeScript Chakra Starter" />
      <Container centerContent maxW="1200px" pb="140px">
        <Heading
          as="h1"
          mt="140px"
          size="2xl"
          fontFamily="Roboto Bold"
          color={colors.primary}
        >
          Next.js TypeScript Chakra Starter
        </Heading>
      </Container>
    </Layout>
  )
}

export default Home
