import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className="w-screen bg-orange min-h-screen bg-[url('/background2.png')] bg-cover bg-center flex justify-center overflow-hidden">
            <header className="fixed top-0 left-0 h-12 w-full pt-2 z-20 flex justify-center">
                <div className="w-full max-w-screen-md text-center relative">
                    <Link href="/" passHref>
                        <a>
                            <Image
                                src="/eloi.svg"
                                alt="eloi"
                                width={80}
                                height={40}
                                className="z-20"
                            />
                        </a>
                    </Link>
                    <BurgerMenu />
                </div>
            </header>
            <div className="w-full max-w-screen-md z-10">
                <div className="h-20"></div>
                <main className="h-5/6 w-full max-w-screen-md fixed overflow-y-scroll px-4">
                    {children}
                </main>
                <footer></footer>
            </div>
            <section className="absolute w-full h-full top-0 left-0 overflow-hidden">
                <span className="absolute -right-2/3 bottom-20 md right-32">
                    <Image
                        src="/cloud1.png"
                        alt="cloud"
                        width={600}
                        height={300}
                    />
                </span>
            </section>
        </section>
    );
}
