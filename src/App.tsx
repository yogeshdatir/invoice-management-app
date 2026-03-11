import InvoicePanel from './components/InvoicePanel';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="min-h-screen flex dark:bg-gray-900 dark:text-white transition-all ease-in-out duration-700">
      <Sidebar />
      <InvoicePanel />
    </div>
  );
}

export default App;
