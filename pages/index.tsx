import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>eloi</title>
                <meta name="eloi" content="eloi's little corner on the web" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <section className="mt-32">
                <h1 className="font-sans text-white text-xl mb-6">
                    Hi! I&apos;m Eloi
                </h1>
                <p className="font-mono text-white">
                    I’m a full stack web developer. Passionate about innovation
                    and new technologies.
                </p>
            </section>
        </div>
    );
};

export default Home;
