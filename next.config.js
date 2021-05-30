module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg|jpg)(\?[a-z0-9=.]+)?$/,
      loader: 'url-loader?limit=100000'
    });
    return config;
  },
  images: {
    domains: ['images.unsplash.com']
  }
};
