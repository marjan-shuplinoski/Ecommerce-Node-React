import Header from './Header';
import Footer from './Footer';
import type { ReactNode } from 'react';


const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col min-h-screen bg-gray-50">
    <Header />
    <main className="flex-1 flex items-center justify-center px-4 py-8">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
