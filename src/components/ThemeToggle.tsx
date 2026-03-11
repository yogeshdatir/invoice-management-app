import type { ComponentPropsWithoutRef } from 'react';
import { useThemeContext } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

type ThemeToggleProps = ComponentPropsWithoutRef<'button'>;

export default function ThemeToggle({
  className = '',
  ...props
}: ThemeToggleProps) {
  const { theme, toggle } = useThemeContext();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={`relative h-max rounded-full p-2 transition-colors hover:bg-gray-700 cursor-pointer text-gray-200 overflow-hidden ${className}`}
      {...props}
    >
      <Sun
        className={`transition-all duration-500 ease-[var(--ease-spring)]
    ${
      theme === 'dark'
        ? 'opacity-100 rotate-0 scale-100'
        : 'opacity-0 rotate-90 scale-50 absolute inset-2'
    }`}
      />
      <Moon
        className={`transition-all duration-500 ease-[var(--ease-spring)]
    ${
      theme === 'dark'
        ? 'opacity-0 -rotate-90 scale-50 absolute inset-2'
        : 'opacity-100 rotate-0 scale-100'
    }`}
      />
    </button>
  );
}
