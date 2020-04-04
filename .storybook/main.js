const webpack = require('webpack')

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: (config) => {
    const provideReact = new webpack.ProvidePlugin({
      React: 'react',
      styled: ['styled-components', 'default'],
    })
    config.plugins.push(provideReact)
    return config
  },
}
