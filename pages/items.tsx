import { useState } from "react";
import { Item } from "../types";
import SearchBar from "../components/Searchbar";
import Card from "../components/Card";
import { items } from "../data/items";
import Head from "next/head";

export async function getStaticProps() {
  return { props: { items } };
}

type ItemsProps = {
  items: Array<Item>;
};

function Items({ items }: ItemsProps) {
  const [search, setSearch] = useState<string>("");
  return (
    <>
      <Head>
        <title>items | isaac Cheatsheet</title>
      </Head>
      <SearchBar placeholder="Brimstone" onChange={setSearch} />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <>
          {items
            .filter((item) => item.name.toLowerCase().includes(search))
            .map((item) => (
              <Card
                key={`item-${item.name}`}
                image={item.image}
                name={item.name}
                description={item.description}
              />
            ))}
        </>
      </div>
    </>
  );
}

export default Items;
