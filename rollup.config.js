// https://medium.com/@tomaszmularczyk89/guide-to-building-a-react-components-library-with-rollup-and-styled-jsx-694ec66bd2
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import inject from '@rollup/plugin-inject'
import url from '@rollup/plugin-url'
import path from 'path'
import multiInput from 'rollup-plugin-multi-input'

export default {
  input: [
    './src/components/**/index.js',
    './src/utils/**/index.js',
    './src/utils/theme/index.js',
  ],
  output: {
    dir: './dist',
    format: 'cjs', // maybe change to es6
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    inject({
      include: '**/*.js',
      React: 'react',
      styled: 'styled-components',
      Prismic: 'prismic-javascript',
      PrismicReactJs: 'prismic-reactjs',
    }),
    resolve(),
    commonjs(),
    url({
      // by default, rollup-plugin-url will not handle font files
      fileName: '[name][extname]',
      include: ['**/*.woff', '**/*.woff2'],
      sourceDir: path.join(__dirname, 'src'),
      publicPath: '/fonts/',
      // setting infinite limit will ensure that the files
      // are always bundled with the code, not copied to /dist
      limit: 0,
    }),
    multiInput({ relative: 'src/' }),
  ],
  external: (id) =>
    /^react|prismic-javascript|styled-components|styled/.test(id),
}
