import type { NextPage } from "next"
import React from "react"
import { Container, Heading } from "@chakra-ui/react"
import Layout from "@components/Layout"
import Helmet from "@components/Helmet"

const NotFound: NextPage = () => {
  return (
    <Layout>
      <Helmet title="404: Not found" />
      <Container centerContent>
        <Heading
          as="h1"
          mt="140px"
          size="2xl"
          fontFamily="Roboto Bold"
          color="#FFFFFF"
        >
          404: Oops, this page doesn&apos;t exist.
        </Heading>
      </Container>
    </Layout>
  )
}

export default NotFound
