import { useEffect, useState } from "react";
import { Trinket } from "../types";
import SearchBar from "../components/UI/Searchbar";
import Card from "../components/UI/Card";
import LoadingCards from "../components/UI/LoadingCards";

type TrinketsProps = {
  trinkets: Array<Trinket>;
  setTrinkets: Function;
  trinketsLoaded: Boolean;
  setTrinketsLoaded: Function;
};

function Trinkets({
  trinkets,
  setTrinkets,
  trinketsLoaded,
  setTrinketsLoaded,
}: TrinketsProps) {
  const [search, setSearch] = useState<string>("");
  async function loadTrinkets() {
    fetch("trinket.json")
      .then((response) => response.json())
      .then((initialItems: any) => {
        setTrinketsLoaded(true);
        setTrinkets(initialItems);
      });
  }

  useEffect(() => {
    loadTrinkets();
  });
  return (
    <>
        <SearchBar placeholder="AAA Battery" onChange={setSearch} />
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {!trinketsLoaded && <LoadingCards number={20} />}
          {trinketsLoaded && (
            <>
              {trinkets
                .filter((trinket) =>
                  trinket.name.toLowerCase().includes(search)
                )
                .map((trinket) => (
                  <Card
                    key={trinket.name}
                    image={trinket.image}
                    name={trinket.name}
                    description={trinket.description}
                    message={trinket.quote}
                  />
                ))}
            </>
          )}
        </div>
    </>
  );
}

export default Trinkets;
