// components/layout.tsx
import NavBar from './NavBar';
import Head from 'next/head';
import styles from './layout.module.css';
import { ReactElement } from 'react';
import Footer from './Footer';

export const siteTitle = 'LetShop';

export default function Layout({ children }: { children: React.ReactNode }): ReactElement {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <NavBar />
      <div className={styles.body}>{children}</div>
      <Footer />
    </div>
  );
}
