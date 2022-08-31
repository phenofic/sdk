import axios from 'axios';
import getBaseHeaders from '../getBaseHeaders.js';
import getBaseUrl from '../getBaseUrl.js';
import verifyConfig from '../verifyConfig.js';

const createNotification = (data, config) => {
  if (!data) throw new Error('Must provide data');
  verifyConfig(config);

  return axios({
    method: 'post',
    url: `${getBaseUrl(config)}/notifications`,
    headers: {
      ...getBaseHeaders(config),
    },
  });
};

export default createNotification;
