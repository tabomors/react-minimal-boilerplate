function generateConfig(env, options) {
  console.log('Webpack started for env', env);

  // eslint-disable-next-line
  return require(`./webpack.config.${env}.js`);
}

module.exports = generateConfig;
