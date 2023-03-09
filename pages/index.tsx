import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [video, setVideo] = useState(<video />);
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/login");
  };

  useEffect(() => {
    setVideo(
      <video
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        poster="./images/main_fullscreen/preloading.jpg"
      >
        <source src="./videos/moon-home.mp4" type="video/mp4" />
        <img src="./images/main_fullscreen/preloading.jpg" alt="preloading" />
      </video>
    );
  }, []);
  if (!video) {
    return null;
  }
  return (
    <>
      <Head>
        <title>Welcome to Black-Hole </title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <figure className={styles.figure}>
        {video ? video : null}
        <article className={styles.txt} onClick={handleClick}>
          <div className={styles.web_txt}>
            <p>Are you</p>
            <p>Developer?</p>
          </div>
          <div className={styles.phone_txt}>
            <p>We support </p>
            <p>your creativity</p>
          </div>
        </article>
      </figure>
    </>
  );
}
