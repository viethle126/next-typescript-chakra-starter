import React from "react"
import { Box } from "@chakra-ui/react"

interface LayoutProps {
  children?: JSX.Element | JSX.Element[]
}

const Layout: React.FC<LayoutProps> = (props) => {
  return <Box>{props.children}</Box>
}

export default Layout
