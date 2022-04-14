import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Card from "../components/Card";

export default function Jobs() {
    const router = useRouter();

    const cardsData: { title: string; subtitle: string; text: string }[] = [
        {
            title: "Lemonade Software",
            subtitle: "current",
            text: "Lorem Ipsum kashdgfkashdfg jahsdgf oajdfgjafgdsj test",
        },
        {
            title: "Parlem Telecom",
            subtitle: "02/2020-12/2020",
            text: "Lorem Ipsum kashdgfkashdfg jahsdgf oajdfgjafgdsj test",
        },
        {
            title: "CROWD",
            subtitle: "09/2018-02/2020",
            text: "Lorem Ipsum kashdgfkashdfg jahsdgf oajdfgjafgdsj test",
        },
        {
            title: "Ironhack",
            subtitle: "12/2017-09/2018",
            text: "Lorem Ipsum kashdgfkashdfg jahsdgf oajdfgjafgdsj test",
        },
    ];

    return (
        <section>
            <h2 className="font-sans text-white text-xl mb-6 ml-4">career</h2>
            {cardsData.map((card, index) => (
                <Card {...card} key={index} />
            ))}
        </section>
    );
}
