import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/_globals.scss';

import Header from '@/components/Header/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ marginTop: '60px' }}>
          {children}
        </main>
        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}