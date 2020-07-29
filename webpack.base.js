module.exports = {
  mode: 'development',
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        // stage-0 支持新语法 或者es2015 等
        presets: ['react', 'stage-0', ['env', {
          targets: {
            browsers: ['last 2 versions']
          }
        }]]
      }
    }]
  }
}
