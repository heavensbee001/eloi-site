import Image from "next/image";
import BurgerMenu from "./BurgerMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className="w-screen bg-orange min-h-screen bg-[url('/background_mobile.png')] bg-cover flex justify-center">
            <header className="fixed top-0 left-0 h-12 w-full pt-2 z-20 flex justify-center">
                <div className="w-full max-w-screen-md text-center relative">
                    <Image
                        src="/eloi.svg"
                        alt="eloi"
                        width={80}
                        height={40}
                        className="z-20"
                    />
                    <BurgerMenu />
                </div>
            </header>
            <div className="w-full max-w-screen-md">
                <div className="h-20"></div>
                <main className="relative px-4">{children}</main>
                <footer></footer>
            </div>
        </section>
    );
}
