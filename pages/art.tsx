import { useRouter } from "next/router";
import Card from "../components/Card";
import Head from "next/head";

export default function Projects() {
    const router = useRouter();

    const cardsData: {
        title: string;
        subtitle: string;
        img: string;
        url: string;
    }[] = [
        {
            title: "counting sheep",
            subtitle: "",
            img: "/projects/counting-sheep.png",
            url: "Lorem Ipsum kashdgfkashdfg jahsdgf oajdfgjafgdsj test",
        },
    ];

    return (
        <section>
            <Head>
                <title>eloi | art</title>
            </Head>
            <h2 className="font-sans text-white text-xl mb-6 ml-4">art</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {cardsData.map((card, index) => (
                    <Card {...card} key={index} />
                ))}
            </div>
        </section>
    );
}
