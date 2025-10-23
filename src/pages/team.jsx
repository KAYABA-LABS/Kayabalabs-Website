import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Team1 from "@/components/team/Team1";
import TeamCounter from "@/components/counter/TeamCounter";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const Team = () => {
  return (
    <div>
      <Head>
        <title>Our Team - KAYABA LABS Blockchain Experts</title>
        <meta name="description" content="Meet the blockchain developers, smart contract engineers, and researchers at KAYABA LABS in Accra, Ghana. Building the decentralized future from West Africa." />
        <meta name="keywords" content="blockchain team Ghana, Web3 developers Africa, Web Development engineers, blockchain researchers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <Team1 />
          <TeamCounter />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default Team;
