import { useState } from "react";
import { Trinket } from "../types";
import SearchBar from "../components/Searchbar";
import Card from "../components/Card";
import { trinkets } from "../data/trinkets";
import Head from "next/head";

export async function getStaticProps() {
  return { props: { trinkets } };
}

type TrinketsProps = {
  trinkets: Array<Trinket>;
};

function Trinkets({ trinkets }: TrinketsProps) {
  const [search, setSearch] = useState<string>("");
  return (
    <>
      <Head>
        <title>trinkets | isaac Cheatsheet</title>
      </Head>
      <SearchBar placeholder="AAA Battery" onChange={setSearch} />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <>
          {trinkets
            .filter((trinket) => trinket.name.toLowerCase().includes(search))
            .map((trinket) => (
              <Card
                key={`trinket-${trinket.name}`}
                image={trinket.image}
                name={trinket.name}
                description={trinket.description}
                message={trinket.quote}
              />
            ))}
        </>
      </div>
    </>
  );
}

export default Trinkets;
