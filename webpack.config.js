function generateConfig(env /*options*/) {
  // eslint-disable-next-line
  return require(`./webpack.config.${env}.js`);
}

module.exports = generateConfig;
