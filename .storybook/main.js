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

    const assetRule = config.module.rules.find(({ test }) => test.test('.svg'))

    const assetLoader = {
      loader: assetRule.loader,
      options: assetRule.options || assetRule.query,
    }

    // Merge our rule with existing assetLoader rules
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack', assetLoader],
    })

    config.module.rules.unshift({
      test: /\.(woff|woff2)$/,
      use: {
        loader: 'url-loader',
      },
    })

    return config
  },
}
