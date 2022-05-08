import Image from "next/image";

export default function Card({
    title,
    subtitle,
    text,
    img,
    url,
}: {
    title: string;
    subtitle: string;
    text?: any;
    img?: string;
    url?: string;
}) {
    return (
        <div className="bg-black bg-opacity-50 p-4 mb-4">
            <h4 className="font-sans text-white">{title}</h4>
            {subtitle && <p className="font-mono text-orange">{subtitle}</p>}
            {text && <div className="font-mono text-white mt-2">{text}</div>}
            {img && (
                <div className={`h-56 mt-4 ${url ? "-mx-4" : "-m-4"}`}>
                    <div className="relative w-full h-full mt-4">
                        <Image
                            src={img}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
            )}
            {url && (
                <p className="font-mono text-orange mt-4">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        watch project ⟶
                    </a>
                </p>
            )}
        </div>
    );
}
