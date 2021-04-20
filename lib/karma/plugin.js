const KW_Framework = require('../karma-webpack/framework');

const KW_KarmaPlugin = {
  'framework:webpack': ['factory', KW_Framework],
};

module.exports = KW_KarmaPlugin;
