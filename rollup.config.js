import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

// Convert CJS modules to ES6, so they can be included in a bundle
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';

const path = 'dist/';
const cssExportMap = {};

const globals = {
    'prop-types': 'PropTypes',
    'react-dom': 'ReactDOM',
    react: 'React',    
    'styled-components': 'styled'
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
            exclude: 'node_modules/**'
        }),
        commonjs(), 
        uglify()
    ]
};