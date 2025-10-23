import CareerBenefit from "@/components/benefit/CareerBenefit";
import Career1 from "@/components/career/Career1";
import RootLayout from "@/components/common/layout/RootLayout";
import CareerGallery from "@/components/gallery/CareerGallery";
import CareerHero from "@/components/hero/CareerHero";
import Head from "next/head";

const Career = () => {
  return (
    <div>
      <Head>
        <title>Careers - Join KAYABA LABS Blockchain Team</title>
        <meta name="description" content="Join the KAYABA LABS team in Accra, Ghana. We're hiring blockchain developers, smart contract engineers, and researchers to build the decentralized future." />
        <meta name="keywords" content="blockchain jobs Ghana, Web Development developer jobs, Web3 careers Africa, smart contract engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <CareerHero />
          <CareerGallery />
          <Career1 />
          <CareerBenefit />
        </RootLayout>
      </main>
    </div>
  );
};

export default Career;
