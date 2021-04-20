class KW_WebpackPlugin {
  constructor(options) {
    this.karmaEmitter = options.karmaEmitter;
    this.controller = options.controller;
  }

  apply(compiler) {
    // webpack bundles are finished
    compiler.hooks.done.tap('KW_WebpackPlugin', async () => {
      // karma refresh
      this.karmaEmitter.refreshFiles();
    });
  }
}

module.exports = KW_WebpackPlugin;
