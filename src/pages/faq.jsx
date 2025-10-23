import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Faq1 from "@/components/faq/Faq1";
import FaqCTA from "@/components/cta/FaqCTA";

const Faq = () => {
  return (
    <>
      <Head>
        <title>FAQ - KAYABA LABS Blockchain Services</title>
        <meta name="description" content="Frequently asked questions about KAYABA LABS' blockchain services, Web Development training programs, and Web3 development. Based in Accra, Ghana with international reach." />
        <meta name="keywords" content="blockchain FAQ, Web Development training questions, Web3 services Ghana, smart contract FAQ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <Faq1 />
          <FaqCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Faq;
