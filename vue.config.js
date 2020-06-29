const path = require('path');

const resolve = dir => path.join(__dirname, dir);

module.exports = {
  // 自定义入口
  pages: {
    main: {
      entry: 'examples/main.js',
      template: 'examples/index.html',
      filename: 'index.html',
      title: 'Formulate',
    },
  },

  // 自定义配置
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('examples'))
      .set('@formulate', resolve('src'));
  },
};
