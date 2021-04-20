const path = require('path');
const os = require('os');

function create() {
  return {
    mode: 'development',
    output: {
      filename: '__karma_webpack_included__/[name].js',
      chunkFilename: '__karma_webpack_served__/[id].js',
      // eslint-disable-next-line prettier/prettier
      path: path.join(os.tmpdir(), '_karma_webpack_') + Math.floor(Math.random() * 1000000),
    },
    stats: {
      modules: false,
      colors: true,
    },
    watch: false,
    plugins: [],
  };
}

module.exports = { create };
