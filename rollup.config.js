import {terser} from 'rollup-plugin-terser';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import analyze from 'rollup-plugin-analyzer';
import malina from './rollup-malina';
import fetchDeps from './rollup-fetch-deps';
import examples from './rollup-examples';

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
        malina({
            hideLabel: production,
        }),
        !production && serve({contentBase: 'public', port, host}),
        !production && livereload({watch: 'public'}),
        examples(production),
        fetchDeps(),
        production && terser(),
        production && analyze()
    ],
    watch: {
        clearScreen: false
    }
}
