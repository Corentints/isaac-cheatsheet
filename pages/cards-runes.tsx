import { useState } from "react";
import { CardRune } from "../types";
import Card from "../components/Card";
import SearchBar from "../components/Searchbar";
import { cardsRunes } from "../data/cards-runes";
import Head from "next/head";

export async function getStaticProps() {
  return { props: { cardsRunes } };
}

type CardsRunesProps = {
  cardsRunes: Array<CardRune>;
};

function CardsRunes({ cardsRunes }: CardsRunesProps) {
  const [search, setSearch] = useState<string>("");
  return (
    <>
      <Head>
        <title>cards/runes | isaac Cheatsheet</title>
      </Head>
      <SearchBar placeholder="XVIII - The Moon" onChange={setSearch} />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <>
          {cardsRunes
            .filter((cardsRune) =>
              cardsRune.name.toLowerCase().includes(search)
            )
            .map((cardsRune) => (
              <Card
                key={`cardsRune-${cardsRune.name}`}
                image={cardsRune.image}
                name={cardsRune.name}
                description={cardsRune.description}
                message={cardsRune.message}
                unlock={cardsRune.unlock ?? "Always available"}
              />
            ))}
        </>
      </div>
    </>
  );
}

export default CardsRunes;
