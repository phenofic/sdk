// reference package.json
const version = '1.2.1';

const getBaseHeaders = ({ apiVersion = 1, apiKey, clientId }) => ({
  'Accept': `application/vnd.phenofic.v${apiVersion}+json`,
  'User-Agent': `phenofic/sdk-v${version}`,
  'x-phenofic-client-id': clientId,
  'x-phenofic-access-token': apiKey,
});

export default getBaseHeaders;
