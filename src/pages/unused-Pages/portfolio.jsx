import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Portfolio1 from "@/components/portfolio/Portfolio1";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Blockchain Portfolio - KAYABA LABS Projects</title>
        <meta name="description" content="Explore KAYABA LABS' blockchain and Web3 projects. Smart contracts, dApps, and DeFi solutions developed in Accra, Ghana for global clients." />
        <meta name="keywords" content="blockchain portfolio Ghana, Web3 projects Africa, smart contract development, dApp portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <Portfolio1 />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Portfolio;
