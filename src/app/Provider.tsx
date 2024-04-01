import { ThemeProvider } from 'next-themes';

interface ThemeProvider {
  children: string[];
}

const Provider: React.FC<ThemeProvider[]> = ({ children }:any) => {
  return (
    <ThemeProvider defaultTheme="system"  attribute='class'>
      
      <div className='text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none duration-300'>
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Provider;