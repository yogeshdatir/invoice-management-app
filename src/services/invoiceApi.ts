import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Invoice } from '../types';

// Define a service using a base URL and expected endpoints
export const invoiceApi = createApi({
  reducerPath: 'invoiceApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getInvoices: builder.query<
      Invoice[],
      { filters: { status: Record<string, boolean> } }
    >({
      query: ({ filters }) => {
        const selectedStatuses = Object.entries(filters.status)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .filter(([_, value]) => value)
          .map(([key]) => key);

        return {
          url: `invoices`,
          params: {
            status: selectedStatuses,
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetInvoicesQuery } = invoiceApi;
