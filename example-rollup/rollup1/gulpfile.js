const gulp = require('gulp');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');

gulp.task('default', async function() {
  const bundle = await rollup.rollup({
    input: './../../src/index.js',
    plugins: [
      nodeResolve({
        mainFields: ['browser', 'jsnext', 'main', 'module']
      }),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelrc: true
      })
    ]
  });
  // output format - 'es', 'iife', 'amd', 'cjs', 'umd'
  await bundle.write({
    format: 'es',
    file: 'index.es.js'
  });
  await bundle.write({
    format: 'iife',
    file: 'index.iife.js'
  });
  await bundle.write({
    format: 'amd',
    file: 'index.amd.js'
  });
  await bundle.write({
    format: 'cjs',
    file: 'index.cjs.js'
  });
  await bundle.write({
    format: 'umd',
    file: 'index.umd.js',
    name: 'default'
  });
  console.log('Bundle created');
});
