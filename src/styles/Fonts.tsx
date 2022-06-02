import React from "react"
import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: "Roboto Black";
      src: url("./fonts/Roboto-Black.woff2") format("woff2"),
        url("./fonts/Roboto-Black.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    
    @font-face {
      font-family: "Roboto Black Italic";
      src: url("./fonts/Roboto-Black-Italic.woff2") format("woff2"),
        url("./fonts/Roboto-Black-Italic.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    
    @font-face {
      font-family: "Roboto Bold";
      src: url("./fonts/Roboto-Bold.woff2") format("woff2"),
        url("./fonts/Roboto-Bold.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    
    @font-face {
      font-family: "Roboto Bold Italic";
      src: url("./fonts/Roboto-Bold-Italic.woff2") format("woff2"),
        url("./fonts/Roboto-Bold-Italic.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    
    @font-face {
      font-family: "Roboto Italic";
      src: url("./fonts/Roboto-Italic.woff2") format("woff2"),
        url("./fonts/Roboto-Italic.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    
    @font-face {
      font-family: "Roboto Light";
      src: url("./fonts/Roboto-Light.woff2") format("woff2"),
        url("./fonts/Roboto-Light.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    
    @font-face {
      font-family: "Roboto Light Italic";
      src: url("./fonts/Roboto-Light-Italic.woff2") format("woff2"),
        url("./fonts/Roboto-Light-Italic.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    
    @font-face {
      font-family: "Roboto Medium";
      src: url("./fonts/Roboto-Medium.woff2") format("woff2"),
        url("./fonts/Roboto-Medium.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    
    @font-face {
      font-family: "Roboto Medium Italic";
      src: url("./fonts/Roboto-Medium-Italic.woff2") format("woff2"),
        url("./fonts/Roboto-Medium-Italic.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    
    @font-face {
      font-family: "Roboto Regular";
      src: url("./fonts/Roboto-Regular.woff2") format("woff2"),
        url("./fonts/Roboto-Regular.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    
    @font-face {
      font-family: "Roboto Thin";
      src: url("./fonts/Roboto-Thin.woff2") format("woff2"),
        url("./fonts/Roboto-Thin.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    
    @font-face {
      font-family: "Roboto Thin Italic";
      src: url("./fonts/Roboto-Thin-Italic.woff2") format("woff2"),
        url("./fonts/Roboto-Thin-Italic.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    `}
  />
)

export default Fonts
