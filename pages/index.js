import Head from "next/head";
import { Toolbar } from "../components/toolbar";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Todays news</title>
        <meta name="description" content="Today's news" />
        <meta property="og:title" content="Today's news" />

      </Head>
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
