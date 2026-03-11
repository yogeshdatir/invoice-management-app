import InvoiceList from '../features/invoice-list/InvoiceList';
import InvoiceListHeader from '../features/invoice-list-header/InvoiceListHeader';
import { useGetInvoicesQuery } from '../services/invoiceApi';

const InvoicePanel = () => {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetInvoicesQuery();
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = invoiceApi.endpoints.getInvoices.useQuery()

  return (
    <div className="flex justify-center pt-18 w-full">
      <div className="flex flex-col gap-16 w-[730px]">
        <InvoiceListHeader invoiceCount={data?.length ?? 0} />
        <InvoiceList invoices={data} error={error} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default InvoicePanel;
