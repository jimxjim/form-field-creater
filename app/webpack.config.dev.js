import path from 'path';
import webpack from 'webpack';
import config from './webpack.config.base.js';


const devConfig = {
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client',
    path.join(__dirname, './entry.js'),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      // API_HOST: "'http://git4uap.large-bear.net:16980/api'",
      // API_HOST: "'http://1e848879.ngrok.io/api'",
      // API_HOST: "'http://192.168.0.96:9527/api'",
      // API_HOST: "'http://git4uap.large-bear.net:9527/api'",
      // API_HOST: "'http://192.168.0.147:9527/api'",
      // API_HOST: "'http://192.168.0.144:9527/api'",
      API_HOST: "'http://apsvr.futureworldex.com:9527/api'",
      // API_HOST: "'http://apiacc.futureworldex.com/api'",
      ENV: "'__DEV__'",
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
};

export default Object.assign({}, config, devConfig);
