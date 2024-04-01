import { ReactNode } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

interface CustomThemeProviderProps {
  children: ReactNode;
}

const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({ children }) => {
  return (
    <NextThemeProvider defaultTheme="system" attribute='class'>
      <div className='text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none duration-300'>
        {children}
      </div>
    </NextThemeProvider>
  );
};

export default CustomThemeProvider;
