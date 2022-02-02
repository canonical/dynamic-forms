import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import sass from 'rollup-plugin-sass';
import pkg from './package.json';

export default [
  {
    input: 'src/js/main.js',
    output: {
      file: pkg.iife,
      format: 'iife',
      name: 'dynamicForms',
      sourcemap: true,
    },
    plugins: [
      babel(),
      commonjs(),
      nodeResolve(),
      terser(),
      sass(),
    ],
  },
  {
    input: 'src/js/main.js',
    output: {
      file: pkg.main,
      format: 'esm',
      name: 'dynamicForms',
      sourcemap: true,
    },
    plugins: [
      babel(),
      commonjs(),
      nodeResolve(),
      sass(),
    ],
  },
];
