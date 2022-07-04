import Image from "next/image";
import { Fragment } from "react";
import Marquee from "react-fast-marquee";

export default function Clouds() {
    return (
        <Fragment>
            <section className="absolute w-full bottom-48 md:bottom-36 left-0 overflow-hidden">
                <Marquee gradient={false} speed={8}>
                    <span style={{ paddingLeft: "100vw" }}>
                        <Image
                            src="/cloud1.png"
                            alt="cloud"
                            width={300}
                            height={150}
                        />
                    </span>
                </Marquee>
            </section>
            <section className="absolute w-full bottom-20 left-0 overflow-hidden">
                <Marquee gradient={false} speed={20}>
                    <span
                        className="-scale-x-100"
                        style={{ paddingLeft: "100vw" }}
                    >
                        <Image
                            src="/cloud1.png"
                            alt="cloud"
                            width={500}
                            height={300}
                        />
                    </span>
                </Marquee>
            </section>
        </Fragment>
    );
}
