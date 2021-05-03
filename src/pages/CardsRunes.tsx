import { useEffect, useState } from "react";
import CardsRunesCard from "../components/UI/CardsRunesCard";
import Navbar from "../components/UI/Navbar";
import { CardRune } from "../types"

function CardsRunes() {
  const [cardsrunes, setCardsrunes] = useState<Array<CardRune>>([]);
  const [search, setSearch] = useState<String>("");
  useEffect(() => {
      fetch("cards-runes.json")
      .then((response) => response.json())
      .then((cardsrunesList: Array<CardRune>) => {
        setCardsrunes(cardsrunesList);
      });

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="pt-4 pb-8">
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-300"
          >
            Search
          </label>
          <div className="mt-1">
            <input
              type="search"
              name="search"
              id="search"
              autoComplete="off"
              onChange={({ target }) => setSearch(target.value.toLowerCase())}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
              placeholder="Bob's Rotten Head"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {cardsrunes
            .filter((cardrune) => cardrune.name.toLowerCase().includes("" + search))
            .map((cardrune) => (
              <CardsRunesCard cardrune={cardrune} />
            ))}
        </div>
        <p className="mt-4 text-sm text-gray-300">
        All game data is taken from <a href="https://bindingofisaacrebirth.fandom.com/wiki/Binding_of_Isaac:_Rebirth_Wiki">Rebirth_Wiki (fandom)</a>
      </p>
      </div>
    </>
  );
}

export default CardsRunes;
