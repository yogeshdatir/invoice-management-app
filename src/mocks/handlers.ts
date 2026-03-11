import { delay, http, HttpResponse } from 'msw';
import data from './data.json';

export const handlers = [
  http.get('/invoices', async () => {
    await delay(2000);
    return HttpResponse.json(data);
  }),
];
