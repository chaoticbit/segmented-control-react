import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

const path = 'dist/'

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
    plugins: [babel(), uglify()]
};