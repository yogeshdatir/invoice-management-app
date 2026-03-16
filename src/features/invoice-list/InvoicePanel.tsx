import InvoiceList from './InvoiceList';
import InvoiceListHeader from '../invoice-list-header/InvoiceListHeader';
import { useGetInvoicesQuery } from '../../services/invoiceApi';
import { useState } from 'react';

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
  const { data, error, isLoading } = useGetInvoicesQuery({
    filters: {
      status: checked,
    },
  });

  return (
    <div className="flex justify-center pt-18 w-full">
      <div className="flex flex-col gap-16 w-[730px]">
        <InvoiceListHeader
          invoiceCount={data?.length ?? 0}
          filterProps={filterProps}
        />
        <InvoiceList invoices={data} error={error} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default InvoicePanel;
