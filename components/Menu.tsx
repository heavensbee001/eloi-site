import Link from "next/link";

export default function Menu({ active }: { active: boolean }) {
    const pages = [
        { name: "career", href: "/career" },
        { name: "projects", href: "/projects" },
        { name: "art", href: "/art" },
    ];
    const socials = [
        { name: "github", href: "", img: "" },
        { name: "twitter", href: "", img: "" },
        { name: "linkedin", href: "", img: "" },
    ];
    return (
        <section
            className={`z-10 fixed top-0 right-0 bg-white border-orange pt-20 border-orange rounded-bl-2xl ${
                active ? "w-4/6 px-4 border-2" : "w-0 p-0 border-0"
            } ease-in-out duration-200`}
        >
            {pages.map((page, index) => (
                <Link href={page.href} passHref key={index}>
                    <p className="font-sans text-orange text-2xl text-right mb-4">
                        {page.name}
                    </p>
                </Link>
            ))}
            <section className="mt-8">
                {socials.map((item, index) => (
                    <Link href={item.href} passHref key={index}>
                        <p>{item.name}</p>
                    </Link>
                ))}
            </section>
        </section>
    );
}
