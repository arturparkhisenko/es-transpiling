'use strict';

// `npm run gulp`

import gulp from 'gulp';
import { rollup } from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

gulp.task('default', () =>
  rollup({
    entry: 'app.js',
    plugins: [
      nodeResolve({
        jsnext: true,
        main: true,
        browser: true,
      }),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: 'es2015-rollup',
      }),
      uglify(),
    ],
  })
  .then(bundle => bundle.write({
    // output format - 'amd', 'cjs', 'es6', 'iife', 'umd'
    format: 'iife',
    dest: 'app.bundle.js',
    sourceMap: true,
  }))
  .then(() => {
    console.log('Bundle created');
  })
);
