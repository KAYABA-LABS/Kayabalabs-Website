import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Contact1 from "@/components/contact/Contact1";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact KAYABA LABS - Accra, Ghana & International</title>
        <meta name="description" content="Get in touch with KAYABA LABS. Located in Accra, Ghana with global reach. Contact us for blockchain training, smart contract development, and Web3 consulting services." />
        <meta name="keywords" content="contact blockchain company Ghana, Accra blockchain office, Web3 consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <Contact1 />
        </RootLayout>
      </main>
    </>
  );
};

export default Contact;
