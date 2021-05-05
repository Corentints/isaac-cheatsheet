import { useState } from "react";
import { DiceRoom } from "../types";
import SearchBar from "../components/UI/Searchbar";
import Card from "../components/UI/Card";
import LoadingCards from "../components/UI/LoadingCards";

type DiceRoomsProps = {
  diceRooms: Array<DiceRoom>;
};

export default function DiceRooms({ diceRooms }: DiceRoomsProps) {
  const [search, setSearch] = useState<string>("");
  return (
    <>
      <SearchBar placeholder={'' + (Math.floor(Math.random() * 6) + 1)} onChange={setSearch} />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {diceRooms.length === 0 && <LoadingCards number={20} />}
        {diceRooms.length > 0 && (
          <>
            {diceRooms
              .filter((diceRoom) =>
                diceRoom.name.toLowerCase().includes(search)
              )
              .map((diceRoom) => (
                <Card
                  key={diceRoom.name}
                  image={diceRoom.image}
                  name={diceRoom.name}
                  description={diceRoom.description}
                />
              ))}
          </>
        )}
      </div>
    </>
  );
}
