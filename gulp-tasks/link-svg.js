'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      return plugins.vinylFs.src(config.patternsPath + '/**/*.icons*.svg')
        .pipe(plugins.plumber({ errorHandler: plugins.notify.onError('Error: <%= error.message %>') }))
        .pipe(plugins.vinylFs.symlink(config.templatesPath, { relative: true }));
    };
  };
})();
