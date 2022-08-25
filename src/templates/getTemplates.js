import axios from 'axios';
import getBaseHeaders from '../getBaseHeaders';
import getBaseUrl from '../getBaseUrl';
import verifyConfig from '../verifyConfig';

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
