import Head from "next/head";
import { Toolbar } from "../components/toolbar";
import { NextSeo } from 'next-seo';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Todays news</title>
        <meta name="description" content="Today's news" />
        <meta property="og:title" content="Today's news" />

      </Head>

      <NextSeo
        title="Today's news in Morocco"
        description="In this page you will find the latest news about Morocco"
        canonical="https://news-site-nu.vercel.app/feed/1"
        openGraph={{
          url: 'https://news-site-nu.vercel.app/feed/1',
          title: "Today's news",
          description: 'In this page you will find the latest news about Morocco',
          // images: [
          //   {
          //     url: 'https://www.example.com/images/my-page-image.jpg',
          //     width: 800,
          //     height: 600,
          //     alt: 'My page image',
          //   },
          // ],
          site_name: "Today's news in Morocco",
        }}
      />
      <Toolbar />
      <main className="grid place-items-center h-[600px] w-full">
        <div className="">
          <h1 className="text-[30px] md:text-[50px] font-bold text-center">
            News App
          </h1>
          <h3 className="text-[10px] md:text-[30px] font-[400] italic">
            You will find the latest news in this website
          </h3>
        </div>
      </main>
    </div>
  );
}
