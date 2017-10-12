const gulp = require('gulp');
const rollup = require('rollup');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
// const uglify = require('rollup-plugin-uglify');

gulp.task('default', async function() {
  const bundle = await rollup.rollup({
    input: 'app.js',
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
      // uglify(),
    ],
  });
  await bundle.write({
    // output format - 'amd', 'cjs', 'es', 'iife', 'umd'
    format: 'iife',
    file: 'app.bundle.js',
    // sourcemap: true,
  });
  console.log('Bundle created');
});
