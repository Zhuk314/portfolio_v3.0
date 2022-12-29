import Head from "next/head";
import type { NextPage } from "next";
import { Header, Welcome, About } from "../components";

const Home: NextPage = () => {
  return (
    <div className="bg-backgroundPrimary">
      <Head>
        <title>Yurii Zhuk</title>
      </Head>

      <section id="home">
        <Welcome />
      </section>

      <section id="about">
        <About />
      </section>

      {/* Skills */}

      {/* Experience */}

      {/* To be ... */}
    </div>
  );
};

export default Home;
