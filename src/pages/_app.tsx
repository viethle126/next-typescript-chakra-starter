import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import Fonts from "@styles/Fonts"
import theme from "@styles/theme"
import { Provider as ReduxProvider } from "react-redux"
import store from "@redux/store"

function NextApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </ChakraProvider>
  )
}

export default NextApp
