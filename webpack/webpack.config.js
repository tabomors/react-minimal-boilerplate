function generateConfig(env /*options*/) {
  return require(`./webpack.config.${env}.js`);
}

module.exports = generateConfig;
