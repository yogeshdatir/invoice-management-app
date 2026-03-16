import InvoiceList from './InvoiceList';
import InvoiceListHeader from '../invoice-list-header/InvoiceListHeader';
import { useGetInvoicesQuery } from '../../services/invoiceApi';
import { useState } from 'react';
import type { Invoice, Status } from '@/types';

export type FilterProps = {
  checked: Record<string, boolean>;
  toggle: (id: string) => void;
};

const InvoicePanel = () => {
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = invoiceApi.endpoints.getInvoices.useQuery()
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const filterProps: FilterProps = {
    checked,
    toggle,
  };

  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetInvoicesQuery();

  const selectedStatuses: Status[] = Object.entries(checked)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([_, value]) => value)
    .map(([key]) => key as Status);

  const filteredInvoices = selectedStatuses.length
    ? data?.filter((invoice: Invoice) =>
        selectedStatuses.includes(invoice.status),
      )
    : data;

  return (
    <div className="flex justify-center pt-18 w-full">
      <div className="flex flex-col gap-16 w-[730px]">
        <InvoiceListHeader
          invoiceCount={data?.length ?? 0}
          filterProps={filterProps}
        />
        <InvoiceList
          invoices={filteredInvoices}
          error={error}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default InvoicePanel;
