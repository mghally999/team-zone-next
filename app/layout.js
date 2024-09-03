import "./styles/globals.css";
import { AppContextProvider } from "./context/AppContext";
import Head from "next/head";

export const metadata = {
  title: "Team Zone 10",
  description: "Martial Arts Academy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/team-favicon.png" />{" "}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body>
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
