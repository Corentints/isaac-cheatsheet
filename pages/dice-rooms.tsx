import { useState } from "react";
import { DiceRoom } from "../types";
import SearchBar from "../components/Searchbar";
import Card from "../components/Card";
import { diceRooms } from "../data/dice-rooms";
import Head from "next/head";

export async function getStaticProps() {
  return { props: { diceRooms } };
}

type DiceRoomsProps = {
  diceRooms: Array<DiceRoom>;
};

export default function DiceRooms({ diceRooms }: DiceRoomsProps) {
  const [search, setSearch] = useState<string>("");
  return (
    <>
      <Head>
        <title>dice rooms | isaac Cheatsheet</title>
      </Head>
      <SearchBar
        placeholder={"" + (Math.floor(Math.random() * 6) + 1)}
        onChange={setSearch}
      />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <>
          {diceRooms
            .filter((diceRoom) => diceRoom.name.toLowerCase().includes(search))
            .map((diceRoom) => (
              <Card
                key={`diceRoom-${diceRoom.name}`}
                image={diceRoom.image}
                name={diceRoom.name}
                description={diceRoom.description}
              />
            ))}
        </>
      </div>
    </>
  );
}
