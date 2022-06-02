import React from "react"
import { Container, Text } from "@chakra-ui/react"
import { Meta } from "@storybook/react/types-6-0"
import { mobileViewportParams } from "@utils/Storybook"
import VerticalSpace from "./index"

const DemoComponent = () => (
  <Container p="20px">
    <Text>Vertical</Text>
    <VerticalSpace height={136} mobileHeight={64} />
    <Text>Space</Text>
  </Container>
)

export default {
  title: "Helper Components/VerticalHeight",
  component: VerticalSpace,
} as Meta

export const Default = () => <DemoComponent />
export const Mobile = () => <DemoComponent />
Mobile.parameters = mobileViewportParams
