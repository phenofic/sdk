import axios from 'axios';
import getBaseHeaders from '../getBaseHeaders';
import getBaseUrl from '../getBaseUrl';
import verifyConfig from '../verifyConfig';

const createTemplate = (data, config) => {
  verifyConfig(config);
  
  if (!data) throw new Error('Must provide template data');
  if (!data.name) throw new Error('Must provide template data.name');

  return axios({
    method: 'post',
    url: `${getBaseUrl(config)}/templates`,
    headers: {
      ...getBaseHeaders(config),
      'Content-Type': 'application/json',
    },
  });
};

export default createTemplate;
