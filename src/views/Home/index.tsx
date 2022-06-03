import type { NextPage } from "next"
import React from "react"
import { connect } from "react-redux"
import { Container, Heading, Box, Button, ButtonGroup } from "@chakra-ui/react"
import colors from "@constants/colors"
import Layout from "@components/Layout"
import Helmet from "@components/Helmet"
import VerticalSpace from "@components/VerticalSpace"
import { Dispatch, RootState } from "@redux/store"
import { selectUserFirstName, selectUserLastName } from "@redux/selectors"
import { User } from "@redux/types"

interface HomeProps {
  userName?: string
  setUserData: (userData: User) => void
}

const Home: NextPage<HomeProps> = (props) => {
  const handlePing = async () => {
    try {
      const response = await fetch("/api/ping")
      const data = await response.json()
      console.log(data?.message)
    } catch (error) {
      console.error(error)
    }
  }

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
        <VerticalSpace height={64} />
        <ButtonGroup
          variant="outline"
          spacing="8"
          alignItems="center"
          justifyContent="center"
          w="100%"
        >
          <Button
            w="120px"
            variant="outline"
            onClick={() => {
              handlePing()
            }}
          >
            Ping
          </Button>
          <Button
            w="120px"
            variant="outline"
            onClick={() => {
              props.setUserData({
                name: {
                  firstName: "Viet",
                  lastName: "Le",
                },
              })
            }}
          >
            Update User
          </Button>
        </ButtonGroup>
        <VerticalSpace height={24} />
        <Box>Hello, {props.userName ? props.userName : "Friend"}</Box>
      </Container>
    </Layout>
  )
}

const mapState = (state: RootState) => {
  const firstName = selectUserFirstName(state)
  const lastName = selectUserLastName(state)
  const userName =
    (firstName && lastName && `${firstName} ${lastName}`) || undefined

  return {
    userName,
  }
}

const mapDispatch = (dispatch: Dispatch) => ({
  setUserData: dispatch.user.setUserData,
})

export default connect(mapState, mapDispatch)(Home)
