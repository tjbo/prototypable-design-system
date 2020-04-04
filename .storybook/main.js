const webpack = require('webpack')
const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: (config) => {
    const provideReact = new webpack.ProvidePlugin({
      React: 'react',
      styled: ['styled-components', 'default'],
    })
    config.plugins.push(provideReact)
    // config.resolve.alias.config = path.resolve(__dirname, '../src/config')
    config.resolve.alias.components = path.resolve(
      __dirname,
      '../src/components',
    )

    config.resolve.alias.mocks = path.resolve(__dirname, '../mocks')

    return config
  },
}
