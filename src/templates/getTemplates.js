import axios from 'axios';
import getBaseHeaders from '../getBaseHeaders.js';
import getBaseUrl from '../getBaseUrl.js';
import verifyConfig from '../verifyConfig.js';

const getTemplates = (config) => {
  verifyConfig(config);
  
  return axios({
    method: 'get',
    url: `${getBaseUrl(config)}/templates`,
    headers: {
      ...getBaseHeaders(config),
    }
  });
};

export default getTemplates;
