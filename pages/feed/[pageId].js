import { useRouter } from "next/router";
import { Toolbar } from "../../components/toolbar";
import Head from "next/head";
import Image from "next/image";
import { NextSeo } from 'next-seo';



export const Feed = ({ PageNumber, articles }) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Feed - newsApp</title>
        <meta name="description" content="feed" />
        <meta property="og:title" content="feed" />
      </Head>
      <Toolbar />
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
      <main className="grid place-items-center h-[600px] w-full space-y-12 pt-[100px]">
        {articles.map((article, index) => (
          <div key={index} className="space-y-4 md:w-[700px] w-[300px] ">
            <div
              className="text-[20px] font-bold italic cursor-pointer"
              onClick={() => {
                window.location.href = article.url;
              }}
            >
              {article.title}{" "}
            </div>
            <div className="">{article.description}</div>
            <div>
              {/* {!!article.urlToImage && (
                <Image src={article.urlToImage} className="w-full" />
              )} */}
            </div>
            <div className="w-full h-px bg-[#000] space-y-12"></div>
          </div>
        ))}

        {/* pagination */}
        <div className="flex md:w-[700px] w-[300px] pb-[40px]">
          <div className="w-full">
            <div
              onClick={() => {
                if (PageNumber > 1) {
                  router.push(`/feed/${PageNumber - 1}`);
                }
              }}
              className={`cursor-pointer float-left font-semibold ${PageNumber ===  1  && 'cursor-not-allowed'}`}
            >
              Previous page
            </div>
          </div>
          <div className="italic">#{PageNumber}</div>
          <div className="w-full">
            <div
              onClick={() => {
                if (PageNumber < 5) {
                  router.push(`/feed/${PageNumber + 1}`);
                }
              }}
              className={`cursor-pointer float-right font-semibold ${PageNumber ===  5  && 'cursor-not-allowed'}`}
            >
              Next page
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const PageNumber = pageContext.query.pageId;
  if (!PageNumber || PageNumber < 1 || PageNumber > 5) {
    return {
      props: {
        articles: [],
        PageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=ma&pageSize=5&page=${PageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );
  const apiJson = await apiResponse.json();

  const { articles } = apiJson;

  return {
    props: {
      articles,
      PageNumber: Number.parseInt(PageNumber),
    },
  };
};

export default Feed;
