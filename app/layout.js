import './styles/globals.css';
import { AppContextProvider } from './context/AppContext';

export const metadata = {
  title: "Team Zone 10",
  description: "Martial Arts Academy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
