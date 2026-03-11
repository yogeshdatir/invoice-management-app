import { Plus } from 'lucide-react';
import InvoiceListFilter from './InvoiceListFilter';

const InvoiceListHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1>Invoices</h1>
        <p>There are 7 total invoices</p>
      </div>
      <div className="flex gap-10">
        <InvoiceListFilter />
        <button className="flex items-center gap-4 bg-primary-button hover:bg-primary-button-hover p-4 pl-2 rounded-4xl h-12 cursor-pointer">
          <div className="flex justify-center items-center bg-white p-2 rounded-full w-8 h-8 text-primary-button">
            <Plus />
          </div>
          <span className="font-bold">New Invoice</span>
        </button>
      </div>
    </div>
  );
};

export default InvoiceListHeader;
