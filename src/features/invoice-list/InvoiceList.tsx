import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { Invoice } from '../../types';
import InvoiceListItem from './InvoiceListItem';
import type { SerializedError } from '@reduxjs/toolkit';

type Props = {
  invoices: Invoice[];
  error: FetchBaseQueryError | SerializedError | undefined;
  isLoading: boolean;
};

const InvoiceList = ({ invoices, error, isLoading }: Props) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>There is an error...</div>;
  }
  return (
    <ul>
      {invoices.map((invoice: Invoice) => {
        return <InvoiceListItem invoice={invoice} />;
      })}
    </ul>
  );
};

export default InvoiceList;
