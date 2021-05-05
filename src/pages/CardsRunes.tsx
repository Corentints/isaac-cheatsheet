import { useState } from "react";
import { CardRune } from "../types";
import Card from "../components/UI/Card";
import SearchBar from "../components/UI/Searchbar";
import LoadingCards from "../components/UI/LoadingCards";

type CardsRunesProps = {
  cardsRunes: Array<CardRune>;
};

function CardsRunes({ cardsRunes }: CardsRunesProps) {
  const [search, setSearch] = useState<string>("");
  return (
    <>
      <SearchBar placeholder="XVIII - The Moon" onChange={setSearch} />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {cardsRunes.length === 0 && <LoadingCards number={20} />}
        {cardsRunes.length > 0 && (
          <>
            {cardsRunes
              .filter((cardsRune) =>
                cardsRune.name.toLowerCase().includes(search)
              )
              .map((cardsRune) => (
                <Card
                  key={cardsRune.name}
                  image={cardsRune.image}
                  name={cardsRune.name}
                  description={cardsRune.description}
                  message={cardsRune.message}
                  unlock={cardsRune.unlock ?? "Always available"}
                />
              ))}
          </>
        )}
      </div>
    </>
  );
}

export default CardsRunes;
