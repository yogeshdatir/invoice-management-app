import { delay, http, HttpResponse } from 'msw';
import InvoicesData from './Invoice.json';
import type { Invoice } from '@/types';

export const handlers = [
  http.get('/invoices', async ({ request }) => {
    const url = new URL(request.url);

    const statuses = url.searchParams.getAll('status')[0].split(',');

    const data = InvoicesData as Invoice[];

    const filteredInvoices =
      statuses.length && statuses[0]
        ? data.filter((invoice: Invoice) => {
            return statuses.includes(invoice.status);
          })
        : data;
    await delay(2000);
    return HttpResponse.json(filteredInvoices);
  }),
];
