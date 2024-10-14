import '@/styles/globals.css';
import { Providers } from '@/providers';
import Navbar from '@/components/commons/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className='h-screen w-screen overflow-x-hidden relative'>
        <Navbar />
        <Providers>{children}</Providers>
      </div>
  );
}
