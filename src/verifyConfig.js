const verifyConfig = (config) => {
  if (!config) throw new Error('Must provide config');
  if (!config.clientId) throw new Error('Must provide config.clientId');
  if (!config.apiKey) throw new Error('Must provide config.apiKey');
};

export default verifyConfig;
