const path = require("path")
const toPath = (_path) => path.join(process.cwd(), _path)
const webpack = require("webpack")

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.join(__dirname, "../src/components"),
      "@constants": path.join(__dirname, "../src/constants"),
      "@hooks": path.join(__dirname, "../src/hooks"),
      "@redux": path.join(__dirname, "../src/redux"),
      "@styles": path.join(__dirname, "../src/styles"),
      "@utils": path.join(__dirname, "../src/utils"),
      "@views": path.join(__dirname, "../src/views"),
      "@emotion/core": toPath("node_modules/@emotion/react"),
      "emotion-theming": toPath("node_modules/@emotion/react"),
    }
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.__NEXT_IMAGE_OPTS": JSON.stringify({
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          domains: [],
          path: "/",
          loader: "default",
        }),
      })
    )
    return config
  },
}
