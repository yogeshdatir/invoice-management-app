import Badge from '../../components/Badge';
import type { Invoice } from '../../types';
import RightChevron from '../../assets/icon-arrow-right.svg?react';

type Props = {
  invoice: Invoice;
};

const InvoiceListItem = ({ invoice }: Props) => {
  const eurFormatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  });
  return (
    <div className="items-center gap-x-2 grid grid-cols-[1fr_1.5fr_2fr_1fr_1fr_0.25fr] bg-white dark:bg-panel-dark shadow-[0_10px_10px_-10px_#48549F1A] py-4 pr-2 pl-8 rounded-lg transition-all duration-700">
      <span className="font-bold text-xs uppercase">#{invoice.id}</span>
      <span className="font-semibold text-secondary-text dark:text-secondary-text-dark text-xs">
        Due {invoice.paymentDue}
      </span>
      <span className="pl-2 font-semibold text-secondary-text dark:text-secondary-text-dark text-xs">
        {invoice.clientName}
      </span>
      <span className="pr-8 font-bold text-base text-right">
        {eurFormatter.format(invoice.total)}
      </span>
      <Badge status={invoice.status} />
      <span className="flex justify-center">
        <button className="hover:bg-primary-button/5 p-4 rounded-md cursor-pointer">
          <RightChevron />
        </button>
      </span>
    </div>
  );
};

export default InvoiceListItem;
