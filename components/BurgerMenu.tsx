import { FC, Fragment, useState } from "react";
import Menu from "./Menu";

export default function BurgerMenu() {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };
    return (
        <Fragment>
            <section
                className="absolute top-4 right-4 w-8 h-10 z-20"
                onClick={handleClick}
            >
                <div
                    className={`absolute w-8 ease-in-out duration-200 ${
                        active ? "rotate-45 translate-x-0.5 translate-y-2" : ""
                    }`}
                >
                    <div className="w-1.5 h-1.5 bg-orange rounded-xl absolute"></div>
                    <div
                        className={`${
                            active ? "w-6" : "w-5"
                        } h-1.5 bg-orange rounded-xl absolute right-0 `}
                    ></div>
                </div>
                <div
                    className={`absolute w-8 ease-in-out duration-200 ${
                        active
                            ? "-rotate-45 -translate-x-3 -translate-y-0.5"
                            : ""
                    }`}
                >
                    <div
                        className={`w-1.5 h-1.5 bg-orange rounded-xl absolute top-3.5 right-0 ease-in-out duration-200 ${
                            active ? "w-5" : ""
                        }`}
                    ></div>
                    <div className="w-5 h-1.5 bg-orange rounded-xl absolute top-3.5"></div>
                </div>
            </section>
            <Menu active={active} />
        </Fragment>
    );
}
