import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navber from "./components/Navber";
import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/authOptions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

export const metadata = {
  title: {
    default: "My First Next App",
    template: "%s | First Next App"
  },
  keywords: ['Next.js', 'React', 'JavaScript', 'Learing', 'My', 'First', 'Next', 'App', 'Playground'],
  description: "Trying to learn NextJS as best as we can",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <NextAuthSessionProvider>
          <Navber session={session} />
          <main className="h-screen"> {children} </main>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}