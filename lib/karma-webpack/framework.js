const KW_Controller = require('./controller');

function KW_Framework(config, emitter) {
  const controller = new KW_Controller();
  controller.updateWebpackOptions(config.webpack);
  controller.updateWebpackOptions({ watch: config.autoWatch });
  controller.karmaEmitter = emitter;

  const servedPattern = `${
    controller.outputPath
  }/**/__karma_webpack_served__/*.js`;
  const includedPattern = `${
    controller.outputPath
  }/**/__karma_webpack_included__/*.js`;

  if (!config.files) {
    config.files = [];
  }
  config.files.push({
    pattern: servedPattern,
    included: false,
    served: true,
    watched: false,
  });
  config.files.push({
    pattern: includedPattern,
    included: true,
    served: true,
    watched: false,
  });

  if (!config.plugins) {
    config.plugins = [];
  }
  config.plugins.unshift('karma-sourcemap-loader');

  if (!config.preprocessors) {
    config.preprocessors = {};
  }
  config.preprocessors[servedPattern] = ['sourcemap'];
  config.preprocessors[includedPattern] = ['sourcemap'];

  controller.bundle();
}

KW_Framework.$inject = ['config', 'emitter'];

module.exports = KW_Framework;
