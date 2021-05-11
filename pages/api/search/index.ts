import { items } from "../../../data/items";
import { cardsRunes } from "../../../data/cards-runes";
import { trinkets } from "../../../data/trinkets";
import { diceRooms } from "../../../data/dice-rooms";

export default function handler({ query: { search } }: any, res: any) {
  const filtered = [...items, ...cardsRunes, ...trinkets, ...diceRooms].filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      search.length > 0
  );
  if (filtered.length > 0) {
    res.status(200).json({ results: filtered });
  } else {
    res.status(200).json({ results: [] });
  }
}
