import Plus from '../../assets/icon-plus.svg?react';
import InvoiceListFilter from './InvoiceListFilter';
type Props = {
  invoiceCount: number;
};

const InvoiceListHeader = ({ invoiceCount }: Props) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="font-bold text-3xl">Invoices</h1>
        <p className="text-base">
          {invoiceCount > 0
            ? invoiceCount > 1
              ? `There are ${invoiceCount} total invoices`
              : `There is ${invoiceCount} invoice`
            : `No invoices`}
        </p>
      </div>
      <div className="flex gap-10">
        <InvoiceListFilter />
        <button className="flex items-center gap-4 bg-primary-button hover:bg-primary-button-hover p-4 pl-2 rounded-4xl h-12 cursor-pointer">
          <div className="flex justify-center items-center bg-white p-2 rounded-full w-8 h-8 text-primary-button">
            <Plus />
          </div>
          <span className="font-bold text-white">New Invoice</span>
        </button>
      </div>
    </div>
  );
};

export default InvoiceListHeader;
