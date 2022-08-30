/* eslint-env node */
import * as phenofic from '../src';

describe('templates', () => {
  describe('getTemplates', () => {
    it('should throw an error if no config given', () => {
      expect(() => phenofic.getTemplates()).toThrow();
    });

    it('should throw an error if empty config given', () => {
      expect(() => phenofic.getTemplates({})).toThrow();
    });

    it('should throw an error if no client id given', () => {
      const config = { apiKey: '999' };
      expect(() => phenofic.getTemplates(config)).toThrow();
    });

    it('should throw an error if no api key given', () => {
      const config = { clientId: '999' };
      expect(() => phenofic.getTemplates(config)).toThrow();
    });

    it.skip('should return a 200 with valid request', async () => {
      const config = { clientId: '999', apiKey: '999' };
      const response = await phenofic.getTemplates(config);
      expect(response.status).toBe(200);
    });
  });

  describe('getTemplate', () => {
    it('should throw an error if no template id given', () => {
      expect(() => phenofic.getTemplate()).toThrow();
    });

    it('should throw an error if no config given', () => {
      expect(() => phenofic.getTemplate(999)).toThrow();
    });

    it('should throw an error if empty config given', () => {
      expect(() => phenofic.getTemplate(999, {})).toThrow();
    });

    it('should throw an error if no client id given', () => {
      const config = { apiKey: '999' };
      expect(() => phenofic.getTemplate(999, config)).toThrow();
    });

    it('should throw an error if no api key given', () => {
      const config = { clientId: '999' };
      expect(() => phenofic.getTemplate(999, config)).toThrow();
    });
  });

  describe('createTemplate', () => {
    it('should throw an error if no data given', () => {
      expect(() => phenofic.createTemplate()).toThrow();
    });

    it('should throw an error if no config given', () => {
      expect(() => phenofic.createTemplate({})).toThrow();
    });

    it('should throw an error if empty config given', () => {
      expect(() => phenofic.createTemplate({}, {})).toThrow();
    });

    it('should throw an error if no client id given', () => {
      const config = { apiKey: '999' };
      expect(() => phenofic.createTemplate({}, config)).toThrow();
    });

    it('should throw an error if no api key given', () => {
      const config = { clientId: '999' };
      expect(() => phenofic.createTemplate({}, config)).toThrow();
    });

    it('should throw an error if no template name given', () => {
      const config = { clientId: '999', apiKey: '999' };
      expect(() => phenofic.createTemplate({}, config)).toThrow();
    });

    it.skip('should return a 201 status code on success', async () => {
      const config = { clientId: '999', apiKey: '999' };
      try {
        const response = await phenofic.createTemplate({ name: 'foo' }, config);
        expect(response.status).toBe(201);
      } catch (err) {
        console.log(err);
        expect('error').toBe('not thrown');
      }
    });
  });
});
