import type { Invoice } from '../../types';

type Props = {
  invoice: Invoice;
};

const InvoiceListItem = ({ invoice }: Props) => {
  return (
    <div>
      <span className="uppercase">#{invoice.id}</span>
    </div>
  );
};

export default InvoiceListItem;
