import { UserRoundCog } from 'lucide-react';
import Logo from '../assets/logo.svg?react';
import ThemeToggle from './ThemeToggle';

const Sidebar = () => {
  return (
    <div className="fixed flex flex-col justify-between items-center bg-slate-800 rounded-r-[1.25rem] h-screen">
      <Logo />
      <div className="flex flex-col items-center gap-6 pb-6 w-full">
        <ThemeToggle />
        <hr className="border-gray-200 w-full h-1" />
        <UserRoundCog className="text-white" />
      </div>
    </div>
  );
};

export default Sidebar;
