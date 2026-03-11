import ChevronDown from '../../assets/icon-arrow-down.svg?react';

const InvoiceListFilter = () => {
  return (
    <button className="flex items-center gap-4 font-bold text-xs cursor-pointer">
      <span>Filter by status</span>
      <ChevronDown className="mb-[-1px] w-4.5" />
    </button>
  );
};

export default InvoiceListFilter;
