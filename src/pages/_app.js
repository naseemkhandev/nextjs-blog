import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { getCategories } from "@/services";
import { useEffect, useState } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((category) => setCategories(category));
  }, []);

  return (
    <div className={`${inter.className} container mx-auto px-10`}>
      <Head>
        <title>Blog - Naseem Khan</title>
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>

      <ThemeProvider>
        <Navbar categories={categories} />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
