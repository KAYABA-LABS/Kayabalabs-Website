import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceHero from "@/components/hero/ServiceHero";
import Service1 from "@/components/service/Service1";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const Service = () => {
  return (
    <>
      <Head>
        <title>Blockchain Services - KAYABA LABS Ghana</title>
        <meta name="description" content="Explore our blockchain services: Web Development training, smart contract development, project incubation, and market research. Based in Ghana, serving international clients." />
        <meta name="keywords" content="blockchain services, Web Development training, smart contract development, Web3 consulting, Ghana" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <ServiceHero />
          <Service1 />
          <ServiceBrand />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Service;
