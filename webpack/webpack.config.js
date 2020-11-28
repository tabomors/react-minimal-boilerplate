function generateConfig(env) {
  const { prod } = env;
  const configPath = `./webpack.config.${prod ? 'prod' : 'dev'}.js`;
  return require(configPath);
}

module.exports = generateConfig;
