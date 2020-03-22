const gulp = require('gulp');
const rollup = require('rollup');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');

gulp.task('default', async function() {
  const bundle = await rollup.rollup({
    input: 'index.js',
    plugins: [
      nodeResolve({
        jsnext: true,
        main: true,
        browser: true,
      }),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelrc: true,
      }),
    ],
  });
  // output format - 'es', 'iife', 'amd', 'cjs', 'umd'
  await bundle.write({
    format: 'es',
    file: 'index.es.js',
  });
  await bundle.write({
    format: 'iife',
    file: 'index.iife.js',
  });
  await bundle.write({
    format: 'amd',
    file: 'index.amd.js',
  });
  await bundle.write({
    format: 'cjs',
    file: 'index.cjs.js',
  });
  await bundle.write({
    format: 'umd',
    file: 'index.umd.js',
  });
  console.log('Bundle created');
});
