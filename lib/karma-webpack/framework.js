const fs = require('fs');
const path = require('path');
const KW_Controller = require('./controller');

function KW_Framework(config, emitter) {
  const controller = new KW_Controller();
  controller.updateWebpackOptions({ watch: config.autoWatch });
  controller.updateWebpackOptions(config.webpack);
  controller.karmaEmitter = emitter;

  if (!config.files) {
    config.files = [];
  }
  config.files.push({
    pattern: controller.outputPath + '/**/__karma_webpack_served__/*.js',
    included: false,
    served: true,
    watched: false,
  });
  config.files.push({
    pattern: controller.outputPath + '/**/__karma_webpack_included__/*.js',
    included: true,
    served: true,
    watched: false,
  });
  if (!config.preprocessors) {
    config.preprocessors = {};
  }
  config.preprocessors[controller.outputPath + '/**/__karma_webpack_included__/*.js'] = ['sourcemap'];
  config.preprocessors[controller.outputPath + '/**/__karma_webpack_served__/*.js'] = ['sourcemap'];

  controller.bundle();
}

KW_Framework.$inject = ['config', 'emitter'];

module.exports = KW_Framework;
