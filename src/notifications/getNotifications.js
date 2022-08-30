import axios from 'axios';
import getBaseHeaders from '../getBaseHeaders';
import getBaseUrl from '../getBaseUrl';
import verifyConfig from '../verifyConfig';

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
