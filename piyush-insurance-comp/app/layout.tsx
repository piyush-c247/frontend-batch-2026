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
      </body>
    </html>
  );
}