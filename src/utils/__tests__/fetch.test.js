import * as fetch from '../fetch';
import { get } from 'axios';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('src/utils/fetch', () => {
  test('fetchCurrencyFromUSD', async () => {
    get.mockResolvedValueOnce({ data: 'sukses' });
    const result = await fetch.fetchCurrencyFromUSD('tes');
    expect(result).toBe('sukses');
  });
})