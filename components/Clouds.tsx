import Image from "next/image";
import { Fragment } from "react";
import Marquee from "react-fast-marquee";

export default function Clouds() {
    return (
        <Fragment>
            <section className="absolute w-full bottom-48 md:bottom-36 left-0 overflow-hidden">
                <Marquee gradient={false} speed={8}>
                    <div style={{ paddingLeft: "70vw" }}></div>
                    <div>
                        <img src="/cloud1.png" alt="cloud" width={300} />
                    </div>
                    <div style={{ paddingLeft: "30vw" }}></div>
                </Marquee>
            </section>
            <section className="absolute w-full bottom-20 left-0 overflow-hidden">
                <Marquee gradient={false} speed={20}>
                    <div style={{ paddingLeft: "30vw" }}></div>
                    <div className="-scale-x-100">
                        <img src="/cloud1.png" alt="cloud" width={500} />
                    </div>
                    <div style={{ paddingLeft: "70vw" }}></div>
                </Marquee>
            </section>
        </Fragment>
    );
}
