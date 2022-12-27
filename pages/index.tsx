import Head from "next/head";
import type { NextPage } from "next";
import { Header, Welcome, About } from "../components";

const Home: NextPage = () => {
  return (
    <div className="bg-backgroundPrimary h-screen snap-y snap-mandatory overflow-scroll">
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
