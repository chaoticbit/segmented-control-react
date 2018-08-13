import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel'

// Convert CJS modules to ES6, so they can be included in a bundle
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

const path = 'dist/';

const globals = {
    'prop-types': 'PropTypes',
    'react-dom': 'ReactDOM',
    react: 'React'        
};

export default {
    input: 'src/index.js',
    output: {
        file: path + 'bundle.js',
        format: 'cjs'
    },
    external: Object.keys(globals),
    plugins: [
        resolve(),
        postcss({            
            plugins: []
        }),        
        babel({
            exclude: 'node_modules/**',
            babelrc: false,
            presets:[['env', {modules: false}],'stage-1','react'],
            plugins: ['external-helpers']
        }),
        commonjs({
            include: /node_modules/
        }),         
    ]
};