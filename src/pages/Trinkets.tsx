import { useState } from "react";
import { Trinket } from "../types";
import SearchBar from "../components/UI/Searchbar";
import Card from "../components/UI/Card";
import LoadingCards from "../components/UI/LoadingCards";

type TrinketsProps = {
  trinkets: Array<Trinket>;
};

function Trinkets({ trinkets }: TrinketsProps) {
  const [search, setSearch] = useState<string>("");
  return (
    <>
      <SearchBar placeholder="AAA Battery" onChange={setSearch} />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {trinkets.length === 0 && <LoadingCards number={20} />}
        {trinkets.length > 0 && (
          <>
            {trinkets
              .filter((trinket) => trinket.name.toLowerCase().includes(search))
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
