import axios from 'axios';
import getBaseHeaders from '../getBaseHeaders.js';
import getBaseUrl from '../getBaseUrl.js';
import verifyConfig from '../verifyConfig.js';

const getNotifications = (userId, config) => {
  if (!userId) throw new Error('Must provide userId');
  verifyConfig(config);

  return axios({
    method: 'get',
    url: `${getBaseUrl(config)}/notifications`,
    headers: {
      ...getBaseHeaders(config),
    },
  });
};

export default getNotifications;
