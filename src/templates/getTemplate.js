import axios from 'axios';
import getBaseHeaders from '../getBaseHeaders.js';
import getBaseUrl from '../getBaseUrl.js';
import verifyConfig from '../verifyConfig.js';

const getTemplate = (templateId, config) => {  
  if (!templateId) throw new Error('Must provide templateId');
  verifyConfig(config);

  return axios({
    method: 'get',
    url: `${getBaseUrl(config)}/templates/${templateId}`,
    headers: {
      ...getBaseHeaders(config),
    }
  });
};

export default getTemplate;
