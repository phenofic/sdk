/* eslint-env node */
import * as phenofic from '../src';

describe('notifications', () => {
  describe('getNotifications', () => {
    it('should throw an error if no user id given', () => {
      expect(() => phenofic.getNotifications()).toThrow();
    });

    it('should throw an error if no config given', () => {
      expect(() => phenofic.getNotifications(999)).toThrow();
    });

    it('should throw an error if empty config given', () => {
      expect(() => phenofic.getNotifications(999, {})).toThrow();
    });

    it('should throw an error if no client id given', () => {
      const config = { apiKey: '999' };
      expect(() => phenofic.getNotifications(999, config)).toThrow();
    });

    it('should throw an error if no api key given', () => {
      const config = { clientId: '999' };
      expect(() => phenofic.getNotifications(999, config)).toThrow();
    });
  });

  describe('createNotification', () => {
    it('should throw an error if no data given', () => {
      expect(() => phenofic.createNotification()).toThrow();
    });

    it('should throw an error if no config given', () => {
      expect(() => phenofic.createNotification({})).toThrow();
    });

    it('should throw an error if empty config given', () => {
      expect(() => phenofic.createNotification({}, {})).toThrow();
    });

    it('should throw an error if no client id given', () => {
      const config = { apiKey: '999' };
      expect(() => phenofic.createNotification({}, config)).toThrow();
    });

    it('should throw an error if no api key given', () => {
      const config = { clientId: '999' };
      expect(() => phenofic.createNotification({}, config)).toThrow();
    });
  });
});
