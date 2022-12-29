import Head from "next/head";
import type { NextPage } from "next";
import { Header, Welcome, About, Skills } from "../components";

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


      <section id="skills">
        <Skills />
      </section>

      {/* Experience */}

      {/* To be ... */}
    </div>
  );
};

export default Home;
