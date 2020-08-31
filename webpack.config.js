var path = require('path');
var webpack = require('webpack');
var vtkRules = require('vtk.js/Utilities/config/dependency.js').webpack.core.rules;

// Optional if you want to load *.css and *.module.css files
var cssRules = require('vtk.js/Utilities/config/dependency.js').webpack.css.rules;

var entry = path.join(__dirname, './src/index.js');
const sourcePath = path.join(__dirname, './src');
const outputPath = path.join(__dirname, './dist');

module.exports = {
  entry,
  output: {
    path: outputPath,
    filename: 'MyWebApp.js',
  },
  module: {
    rules: [
        { test: /\.html$/, loader: 'html-loader' },
        // {
        //   test: /\.css$/i,
        //   use: ['style-loader', 'css-loader'],
        // },
        {
          test: /\.module\.css$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]-[local]_[sha512:hash:base64:5]',
                },
              },
            },
            { loader: 'postcss-loader' },
          ],
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            'url-loader?limit=10000',
            'img-loader'
          ],
        },
          
        
        // {
        //   test: /\.(png|svg|jpe?g|gif)$/,
        //   include: /images/,
        //   use: [
        //     {
        //       loader: 'file-loader',
        //       options: {
        //         name: '[name].[ext]',
        //         outputPath: 'images/',
        //         publicPath: 'images/'
        //       }
        //     }
        //   ]
        // },
        
    ].concat(vtkRules),
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      sourcePath,
    ],
  },
};

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: ['style-loader', 'css-loader'],
//       },
//     ],
//   },
// };
