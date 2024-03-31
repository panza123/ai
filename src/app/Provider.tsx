import { ThemeProvider } from 'next-themes';

interface ThemeProvider {
  children: string[];
}

const Provider: React.FC<ThemeProvider[]> = ({ children }:any) => {
  return (
    <ThemeProvider defaultTheme="system"  attribute='class'>
      <div className='dark:bg-gray-700 w-full h-screen'>

        {children}
      </div>
    </ThemeProvider>
  );
};

export default Provider;