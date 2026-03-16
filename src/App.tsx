import InvoicePanel from './features/invoice-list/InvoicePanel';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex bg-main-light dark:bg-main-dark min-h-screen text-deep-dark dark:text-white transition-all duration-700 ease-in-out">
      <Sidebar />
      <InvoicePanel />
    </div>
  );
}

export default App;
