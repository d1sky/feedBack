module.exports = {
    entry: './src/app.js',
    output: {
      path: __dirname,
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: { presets: [ '@babel/preset-env', '@babel/react' ] }
        }
      ]
    }
  };