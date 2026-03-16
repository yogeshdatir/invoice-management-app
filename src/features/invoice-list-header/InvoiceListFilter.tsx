import { Checkbox } from '@/components/ui/checkbox';
import ChevronDown from '../../assets/icon-arrow-down.svg?react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { statusValues } from '../../types/index';
import type { FilterProps } from '../invoice-list/InvoicePanel';

interface Option {
  id: string;
  label: string;
}

const options: Option[] = [];

Object.values(statusValues).forEach((status: string) => {
  options.push({ id: status.toLowerCase(), label: status });
});

const InvoiceListFilter = ({ filterProps }: { filterProps: FilterProps }) => {
  const { checked, toggle } = filterProps || {};

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-4 outline-offset-4 font-bold text-base cursor-pointer">
            <span>Filter by status</span>
            <ChevronDown className="-mb-px w-4.5" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          {options.map((opt) => (
            <DropdownMenuItem
              key={opt.id}
              onSelect={(e) => e.preventDefault()} // prevent close on click
              onClick={() => toggle(opt.id)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Checkbox
                checked={!!checked[opt.id]}
                onCheckedChange={() => toggle(opt.id)}
                className="data-checked:bg-primary-button dark:data-checked:bg-primary-button"
              />
              <span>{opt.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default InvoiceListFilter;
