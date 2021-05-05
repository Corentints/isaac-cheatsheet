import { CardRune, Item, Trinket } from "../types";

export default function load(fetchUrl: string, setEntity: Function, setLoaded: Function) {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((initialArray: Array<Item|Trinket|CardRune>) => {
        setEntity(initialArray);
        setLoaded(true);
      });
  }