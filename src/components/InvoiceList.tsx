import InvoiceListItem from './InvoiceListItem';

type Props = {
  invoices: any;
};

const InvoiceList = ({ invoices }: Props) => {
  return (
    <ul>
      {invoices.map((invoice: any) => {
        return <InvoiceListItem invoice={invoice} />;
      })}
    </ul>
  );
};

export default InvoiceList;
