import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { Invoice } from '../../types';
import InvoiceListItem from './InvoiceListItem';
import type { SerializedError } from '@reduxjs/toolkit';
import EmptyIllustration from '../../assets/illustration-empty.svg?react';

type Props = {
  invoices: Invoice[] | undefined;
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
  if (!invoices?.length) {
    return (
      <div className="flex justify-center pt-35.25 w-full">
        <div className="flex flex-col justify-center gap-4 max-w-60.5">
          <EmptyIllustration />
          <p className="pt-16 pb-6 font-bold text-2xl text-center">
            There is nothing here
          </p>
          <p className="text-secondary-text dark:text-secondary-text-dark text-base text-center">
            Create a new invoice by clicking the{' '}
            <span className="font-bold">New Invoice</span> button and get
            started
          </p>
        </div>
      </div>
    );
  }
  return (
    <ul className="flex flex-col gap-4">
      {invoices?.map((invoice: Invoice) => {
        return <InvoiceListItem key={invoice.id} invoice={invoice} />;
      })}
    </ul>
  );
};

export default InvoiceList;
