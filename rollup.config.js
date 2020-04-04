// import peerDepsExternal from 'rollup-plugin-peer-deps-external'
// import autoExternal from 'rollup-plugin-auto-external'
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {
  external: ['react', 'react-dom', 'styled-components'],

  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    // globals: {
    //   react: 'React',
    //   'react-dom': 'ReactDOM',
    //   'styled-components': 'styled',
    // },
  },
  plugins: [
    resolve(),
    babel({
      presets: ['@babel/react'],
      exclude: 'node_modules/**',
    }),
  ],
}
