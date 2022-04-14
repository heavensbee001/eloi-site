export default function Card({
    title,
    subtitle,
    text,
}: {
    title: string;
    subtitle: string;
    text: string;
}) {
    return (
        <div className="bg-black bg-opacity-50 p-4 mb-4">
            <h4 className="font-sans text-white">{title}</h4>
            <span className="font-mono text-orange">{subtitle}</span>
            <p className="font-mono text-white">{text}</p>
        </div>
    );
}
