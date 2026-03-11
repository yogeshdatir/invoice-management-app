import InvoiceList from './InvoiceList';
import InvoiceListHeader from './InvoiceListHeader';

const InvoicePanel = () => {
  return (
    <div className="w-full pt-18 flex justify-center">
      <div className="w-[730px] flex flex-col gap-16">
        <InvoiceListHeader />
        <InvoiceList />
      </div>
    </div>
  );
};

export default InvoicePanel;
