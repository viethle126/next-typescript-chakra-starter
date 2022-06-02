import { extendTheme } from "@chakra-ui/react"
import { theme as baseTheme } from "@chakra-ui/react"
import breakpoints from "@constants/breakpoints"
import colors from "@constants/colors"

const theme = extendTheme({
  breakpoints,
  colors: {
    ...baseTheme.colors,
    ...colors,
  },
  fonts: {
    ...baseTheme.fonts,
    robotoBlack: "Roboto Black, sans-serif",
    robotoBlackItalic: "Roboto Black Italic, sans-serif",
    robotoBold: "Roboto Bold, sans-serif",
    robotoBoldItalic: "Roboto Bold Italic, sans-serif",
    robotoItalic: "Roboto Italic, sans-serif",
    robotoLight: "Roboto Light, sans-serif",
    robotoLightItalic: "Roboto Light Italic, sans-serif",
    robotoMedium: "Roboto Medium, sans-serif",
    robotoMediumItalic: "Roboto Medium Italic, sans-serif",
    robotoRegular: "Roboto Regular, sans-serif",
    robotoThin: "Roboto Thin, sans-serif",
    robotoThinItalic: "Roboto Thin Italic, sans-serif",
  },
})

export default theme
