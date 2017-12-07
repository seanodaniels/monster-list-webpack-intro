module.exports = {
  entry: {
    app: "./app/javascript/index.js",
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader'},
        ]
      }
    ]
  },
  watch: true,
}
