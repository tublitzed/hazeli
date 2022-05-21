const path = require('path');

const nextConfig = {
  // eslint: {
  //   // Warning: This allows production builds to successfully complete even if
  //   // your project has ESLint errors.
  //   ignoreDuringBuilds: true,
  // },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
  webpack: (config) => {
    config.resolve.alias['@components'] = path.resolve(
      path.join(__dirname, 'components')
    );
    // config.resolve.alias['@constants'] = path.resolve(
    //   path.join(__dirname, 'components/helpers/constants.js')
    // );
    config.resolve.alias['@helpers'] = path.resolve(
      path.join(__dirname, 'components/helpers')
    );
    config.resolve.alias['@styles'] = path.resolve(
      path.join(__dirname, 'styles')
    );
    return config;
  },
};

module.exports = nextConfig;
