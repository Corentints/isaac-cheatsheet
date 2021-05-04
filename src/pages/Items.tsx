import { useEffect, useState } from "react";
import { Item } from "../types";
import SearchBar from "../components/UI/Searchbar";
import Card from "../components/UI/Card";
import LoadingCards from "../components/UI/LoadingCards"

type ItemsProps = {
  items: Array<Item>,
  itemsLoaded: Boolean,
}

function Items({items, itemsLoaded}: ItemsProps) {
  const [search, setSearch] = useState<string>("");
  return (
    <>
      <SearchBar placeholder="Brimstone" onChange={setSearch} />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {!itemsLoaded && <LoadingCards number={20} />}
        {itemsLoaded && (
          <>
            {items
              .filter((item) =>
              item.name.toLowerCase().includes(search)
              )
              .map((item) => (
                <Card
                  key={item.name}
                  image={item.image}
                  name={item.name}
                  description={item.description}
                />
              ))}
          </>
        )}
      </div>
  </>
  );
}

export default Items;
