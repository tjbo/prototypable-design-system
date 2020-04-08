// https://medium.com/@tomaszmularczyk89/guide-to-building-a-react-components-library-with-rollup-and-styled-jsx-694ec66bd2
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import inject from '@rollup/plugin-inject'
import svg from 'rollup-plugin-svg'

export default {
  input: './src/index.js',
  output: {
    file: './dist/index.js',
    format: 'cjs',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    inject({
      include: '**/*.js',
      React: 'react',
      styled: 'styled-components',
    }),
    resolve(),
    commonjs(),
    svg(),
  ],
  external: (id) => /^react|styled/.test(id),
}
