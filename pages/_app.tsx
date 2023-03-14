import Github from "@/service/github";
import "@/styles/globals.css";
import axios from "axios";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const httpClient = axios.create({
    baseURL: "https://api.github.com",
  });

  const github = new Github(httpClient);

  return (
    <>
      <Head>
        <title>Welcome to Black-Hole </title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} github={github} />
    </>
  );
}
