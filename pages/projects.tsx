import { useRouter } from "next/router";
import Card from "../components/Card";
import Head from "next/head";

export default function Projects() {
  const router = useRouter();

  const cardsData: {
    title: string;
    subtitle: string;
    text: any;
    url: string;
  }[] = [
    {
      title: "🌱 Soil",
      subtitle: "",
      text: (
        <>
          <p>
            Soil 🌱 aims to enable community members to find & be found for
            personalised, highly relevant & highly actionable opportunities to
            learn, earn, collaborate & contribute.{" "}
          </p>
          <br />
          <p>Soil is being built by Developer DAO members</p>
        </>
      ),
      url: "",
    },
    {
      title: "wagmi Teams",
      subtitle: "",
      text: "Concept dapp where users can post their team open positions. Messages are registered into the polygon blockchain",
      url: "https://wagmi-teams-heavensbee001.vercel.app/",
    },
    {
      title: "qr drop",
      subtitle: "",
      text: (
        <p>
          This is a dapp where event organisers can generate QR links, allowing
          attendants to mint a soulbound NFT.
          <br />
          <br />
          <i>
            <b>Project under development</b> for the Polygon BUIDL IT : Summer
            2022... It is not deployed yet, but you can check the code on my
            github
          </i>{" "}
          😉
        </p>
      ),
      url: "https://github.com/heavensbee001",
    },
  ];

  return (
    <section>
      <Head>
        <title>eloi | projects</title>
      </Head>
      <h2 className="font-sans text-white text-xl mb-6 ml-4">projects</h2>
      {cardsData.map((card, index) => (
        <Card {...card} key={index} />
      ))}
    </section>
  );
}
