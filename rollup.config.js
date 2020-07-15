import {terser} from 'rollup-plugin-terser';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import analyze from 'rollup-plugin-analyzer';
import malinaRollup from './malina-rollup';
import examplesRollup from './examples-rollup';

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 7000;
const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/main.js',
    output: {
        file: 'public/bundle.js',
        format: 'iife'
    },
    plugins: [
        resolve(),
        commonjs(),
        malinaRollup({
            hideLabel: production,
        }),
        !production && serve({contentBase: 'public', port, host}),
        !production && livereload({watch: 'public'}),
        examplesRollup(production),
        production && terser(),
        production && analyze()
    ],
    watch: {
        clearScreen: false
    }
}
