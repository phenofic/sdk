import axios from 'axios';
import getBaseHeaders from '../getBaseHeaders';
import getBaseUrl from '../getBaseUrl';
import verifyConfig from '../verifyConfig';

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
