import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Blog1 from "@/components/blog/Blog1";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blockchain Blog - KAYABA LABS Insights</title>
        <meta name="description" content="Latest insights on blockchain technology, Web3 development, and cryptocurrency trends from KAYABA LABS. Expert perspectives from Ghana's leading blockchain lab." />
        <meta name="keywords" content="blockchain blog Ghana, Web3 insights Africa, Web Development tutorials, cryptocurrency news" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <Blog1 />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Blog;
