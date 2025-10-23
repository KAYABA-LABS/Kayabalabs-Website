import DigitalAgencyBrand from "@/components/brand/DigitalAgencyBrand";
import RootLayout from "@/components/common/layout/RootLayout";
import AboutCounter from "@/components/counter/AboutCounter";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import AboutHero from "@/components/hero/AboutHero";
import AboutStory from "@/components/story/AboutStory";
import AboutTeam from "@/components/team/AboutTeam";
import AboutTestimonial from "@/components/testimonial/AboutTestimonial";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>About KAYABA LABS - Blockchain Innovation from Ghana</title>
        <meta name="description" content="Learn about KAYABA LABS, Ghana's premier blockchain R&D lab. Based in Accra, we train developers, incubate Web3 projects, and serve international markets with cutting-edge blockchain solutions." />
        <meta name="keywords" content="blockchain Ghana, Web3 Africa, Web Development training, blockchain research, Accra tech hub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout>
          <AboutHero />
          <AboutStory />
          <AboutCounter />
          <AboutTeam />
          <DigitalAgencyBrand />
          <AboutTestimonial />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
