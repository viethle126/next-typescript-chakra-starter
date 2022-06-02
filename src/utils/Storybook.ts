import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

const styleOverrides = {
  border: "1px solid #888",
  boxShadow:
    "0 .25rem .5rem 0 rgba(0,0,0,0.12), 0 .125rem .25rem 0 rgba(0,0,0,0.08)",
  transition: "none",
}

const viewportsWithOverrides = Object.keys(INITIAL_VIEWPORTS).map((k) => ({
  ...INITIAL_VIEWPORTS[k],
  styles: {
    ...INITIAL_VIEWPORTS[k].styles,
    ...styleOverrides,
  },
}))

const updatedViewports = {
  responsive: {
    name: "Responsive",
    styles: {
      width: "100%",
      height: "100%",
      border: "none",
      boxShadow: "none",
      transition: "none",
    },
  },
  ...viewportsWithOverrides,
}

export const viewportParams = {
  viewport: {
    viewports: updatedViewports,
  },
}

export const mobileViewportParams = {
  viewport: {
    viewports: updatedViewports,
    defaultViewport: "4", // Iphone X
  },
}
