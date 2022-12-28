import Head from "next/head";
import type { NextPage } from "next";
import { Header, Welcome, About } from "../components";

const Home: NextPage = () => {
  return (
    <div className="bg-backgroundPrimary">
      <Head>
        <title>Yurii Zhuk</title>
      </Head>

      <Welcome />

      <About />

      {/* Skills */}

      {/* Experience */}

      {/* To be ... */}
    </div>
  );
};

export default Home;
