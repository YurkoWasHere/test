const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      buffer: require.resolve("buffer/"),
      "url": require.resolve("url/") 
      //stream: require.resolve("stream-browserify")
    },
  },
  optimization: {
    minimize: false,
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devtool: "source-map",
};
