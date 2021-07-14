const path = require('path')

module.exports = {
  entry: ["whatwg-fetch","@babel/polyfill",'./src/index.js','./src/search.js','./src/AddToReadList.js','./src/addToShelf.js','./src/clearAllMyBooks.js','./src/displayMyBooks.js','./src/DisplayReadList.js','./src/openMyBooksTab.js','./src/OpenSideNav.js','./src/readFromReadList.js','./src/removeFromReadList.js','./src/removeFromMyBooks'],

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    
  },
  module:{
    rules:[
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },

      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
      },
    {  test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
         presets: ["@babel/preset-env"]
      }
      },
],
},
devtool: 'source-map'
};


