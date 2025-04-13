// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import { Providers } from './providers'; // ✅ we’ll create this

export const metadata = {
  title: 'Blog Dashboard',
  description: 'Frontend test project for Urbio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
      <html lang="en">
      <body>
      <Providers>
        {children}
      </Providers>
      </body>
      </html>
  );
}
