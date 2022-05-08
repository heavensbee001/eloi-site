import { useRouter } from "next/router";
import Card from "../components/Card";
import Head from "next/head";

export default function Projects() {
    const router = useRouter();

    const cardsData: {
        title: string;
        subtitle: string;
        text: string;
        url: string;
    }[] = [
        {
            title: "wagmi Teams",
            subtitle: "",
            text: "Concept dapp where users can post their team open positions. Messages are registered into the polygon blockchain",
            url: "https://wagmi-teams-heavensbee001.vercel.app/",
        },
    ];

    return (
        <section>
            <Head>
                <title>eloi | projects</title>
            </Head>
            <h2 className="font-sans text-white text-xl mb-6 ml-4">projects</h2>
            {cardsData.map((card, index) => (
                <Card {...card} key={index} />
            ))}
        </section>
    );
}
