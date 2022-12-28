import Head from "next/head";
import type { NextPage } from "next";
import { Header, Welcome, About } from "../components";

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-scroll bg-backgroundPrimary">
      <Head>
        <title>Yurii Zhuk</title>
      </Head>

      <Header />
      <Welcome />

      <About />

      {/* Skills */}

      {/* Experience */}

      {/* To be ... */}
    </div>
  );
};

export default Home;
