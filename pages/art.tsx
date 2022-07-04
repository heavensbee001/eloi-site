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
            url: "https://editor.p5js.org/eloigil/sketches/l64gYtcm8",
        },
        {
            title: "bamboo",
            subtitle: "",
            img: "/projects/bamboo.png",
            url: "https://editor.p5js.org/eloigil/sketches/taZItGLEK",
        },
        {
            title: "Durmitor",
            subtitle: "",
            img: "/projects/durmitor.png",
            url: "https://editor.p5js.org/eloigil/sketches/3pSDq5XC2",
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
