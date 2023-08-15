import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import sourcemaps from 'rollup-plugin-sourcemaps';
import multiInput from 'rollup-plugin-multi-input';
import copy from 'rollup-plugin-copy';

export default {
  input: 'dist/components/*.js',
  output: [
    {
      dir: 'dist/components-cjs',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  external: id => {
    return id.startsWith('react') || id.startsWith('@geovistory');
  },
  plugins: [
    multiInput.default({ relative: 'dist/components/' }),
    nodeResolve(),
    commonjs(),
    peerDepsExternal(),
    sourcemaps(),
    copy({
      targets: [
        { src: 'dist/components/*.d.ts', dest: 'dist/components-cjs' },
        { src: 'src/components-all.d.ts', dest: 'dist/types' },
      ],
    }),
  ],
};
