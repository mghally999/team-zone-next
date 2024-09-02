import './styles/globals.css';
import { AppContextProvider } from './context/AppContext';
import Head from 'next/head';

export const metadata = {
  title: "Team Zone 10",
  description: "Martial Arts Academy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/ionicons@5.5.2/dist/css/ionicons.min.css"
        />
      </Head>
      <body>
        <AppContextProvider>
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
