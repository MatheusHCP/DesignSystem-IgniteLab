module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  viteFinal: (config, {configType}) => {
    if(configType == "PRODUCTION"){
      config.base = '/ignite-lab-design-system' // Essa configuração só será utilizada em caso de o storybook for acessado por subdominio exemplo.com/ignite-lab-design-system para o storybook não se perder.
    }

    return config
  }
}