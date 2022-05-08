import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>eloi</title>
            </Head>

            <section className="mt-32">
                <h1 className="font-sans text-white text-xl mb-6">
                    Hi! I&apos;m Eloi
                </h1>
                <p className="font-mono text-white">
                    I’m a full stack web developer, curious explorer and
                    passionate about innovation and new technologies.
                </p>
            </section>
        </div>
    );
};

export default Home;
