import Head from "next/head";
import type { NextPage } from "next";
import { Header, Welcome } from "../components";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Yurii Zhuk</title>
      </Head>

      <Header />

      <Welcome />

      {/* About */}

      {/* Skills */}

      {/* Experience */}

      {/* To be ... */}
    </div>
  );
};

export default Home;
