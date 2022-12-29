import Head from "next/head";
import type { NextPage } from "next";
import { Header, Welcome, About, Skills } from "../components";

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-backgroundPrimary snap-y snap-mandatory">
      <Head>
        <title>Yurii Zhuk</title>
      </Head>

      <section id="home" className="snap-start ">
        <Welcome />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/* Experience */}

      {/* To be ... */}
    </div>
  );
};

export default Home;
