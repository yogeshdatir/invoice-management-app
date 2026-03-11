import { UserRoundCog } from 'lucide-react';
import Logo from '../assets/logo.svg?react';
import ThemeToggle from './ThemeToggle';

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-between bg-slate-800 rounded-r-[1.25rem]">
      <Logo />
      <div className="flex flex-col items-center w-full gap-6 pb-6">
        <ThemeToggle />
        <hr className=" w-full h-1 border-gray-200" />
        <UserRoundCog className="text-white " />
      </div>
    </div>
  );
};

export default Sidebar;
