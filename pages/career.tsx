import { useRouter } from "next/router";
import Card from "../components/Card";
import Head from "next/head";

export default function Career() {
    const router = useRouter();

    const cardsData: { title: string; subtitle: string; text: any }[] = [
        {
            title: "Lemonade Software",
            subtitle: "current",
            text: (
                <span>
                    <p>
                        - Develop the Import Control System 2 Application for
                        the Taxation and Customs Union department of the
                        European Commission. With Angular and Java.
                    </p>
                </span>
            ),
        },
        {
            title: "Parlem Telecom",
            subtitle: "02/2020-12/2020",
            text: (
                <span>
                    <p>
                        - Technical management and development of company’s web
                        application (Vue) and mobile app (React Native)
                    </p>
                    <p>
                        - Develop several micro-services and backoffice software
                        with Node + Express, MongoDB, MySQL and Google Cloud.
                    </p>
                </span>
            ),
        },
        {
            title: "CROWD",
            subtitle: "09/2018-02/2020",
            text: (
                <span>
                    <p>
                        - Full Stack development of many webs using different
                        Javascript technologies such as React, Vue, Node,
                        Express ...
                    </p>
                    <p>
                        - Work with companies like SEAT, Bimba y Lola, Xarit,
                        ISDIN or The Ricky Rubio Foundation.
                    </p>
                    <p>
                        - Deal directly with clients and diverse profiles (ie.
                        Designers, Marketing, Systems, Art Directors...).
                    </p>
                    <p>
                        - Continuous usability improvement providing and
                        implementing feedback.
                    </p>
                    <p>- Lead open coding workshops with Spark AR.</p>
                </span>
            ),
        },
        {
            title: "Ironhack",
            subtitle: "12/2017-09/2018",
            text: (
                <span>
                    <p>
                        - Support students and other assistant teachers,
                        facilitating their integration and learning.
                    </p>
                    <p>
                        - Review code, emphasizing performance and good
                        practices.
                    </p>
                    <p>- Carry out technical interviews for new candidates.</p>
                    <p>- Lead open programming workshops.</p>
                </span>
            ),
        },
    ];

    return (
        <section>
            <Head>
                <title>eloi | career</title>
            </Head>
            <h2 className="font-sans text-white text-xl mb-6 ml-4">career</h2>
            {cardsData.map((card, index) => (
                <Card {...card} key={index} />
            ))}
        </section>
    );
}
