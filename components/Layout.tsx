import type { FC } from "react";
import Head from "next/head";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
    id?: string;
}) {
    return (
        <section className="w-screen bg-orange min-h-screen bg-[url('/background_mobile.png')] bg-cover">
            <header className="fixed h-12 w-screen text-center pt-2 z-20">
                <Image src="/eloi.svg" alt="eloi" width={80} height={40} />
                <BurgerMenu />
            </header>
            <div className="h-20 relative"></div>
            <main className="relative px-4">{children}</main>
            <footer></footer>
        </section>
    );
}
