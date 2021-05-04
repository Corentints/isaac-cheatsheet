import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import Items from "./pages/Items";
import Trinkets from "./pages/Trinkets";
import CardRunes from "./pages/CardsRunes";
import { useEffect, useState } from "react";
import { CardRune, Item, Trinket } from "./types";

function App() {
  const [items, setItems] = useState<Array<Item>>([]);
  const [itemsLoaded, setItemsLoaded] = useState<Boolean>(false);
  const [trinkets, setTrinkets] = useState<Array<Trinket>>([]);
  const [trinketsLoaded, setTrinketsLoaded] = useState<Boolean>(false);
  const [cardsRunes, setCardsRunes] = useState<Array<CardRune>>([]);
  const [cardsRunesLoaded, setCardsRunesLoaded] = useState<Boolean>(false);

  async function loadItems() {
    fetch("data.json")
      .then((response) => response.json())
      .then((initialItems: any) => {
        setItemsLoaded(true);
        setItems(initialItems);
      });
  }

  async function loadTrinkets() {
    fetch("trinket.json")
      .then((response) => response.json())
      .then((initialItems: any) => {
        setTrinketsLoaded(true);
        setTrinkets(initialItems);
      });
  }

  async function loadCardsRunes() {
    fetch("cards-runes.json")
      .then((response) => response.json())
      .then((initialItems: any) => {
        setCardsRunesLoaded(true);
        setCardsRunes(initialItems);
      });
  }

  useEffect(() => {
    loadItems();
    loadTrinkets();
    loadCardsRunes();
  }, []);

  return (
    <Router>
      <Navbar items={items} cardsRunes={cardsRunes} trinkets={trinkets} />
      <div className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8 pt-[70px]">
        <Switch>
          <Route path="/items">
            <Items items={items} itemsLoaded={itemsLoaded} />
          </Route>
          <Route path="/trinkets">
            <Trinkets trinkets={trinkets} trinketsLoaded={trinketsLoaded} />
          </Route>
          <Route path="/cards-runes">
            <CardRunes
              cardsRunes={cardsRunes}
              cardsRunesLoaded={cardsRunesLoaded}
            />
          </Route>
          <Route path="/">
            <Redirect to="/items" />
          </Route>
        </Switch>
        <p className="mt-4 text-sm text-gray-300">
          All game data is taken from the{" "}
          <a
            href="https://bindingofisaacrebirth.fandom.com/wiki/Binding_of_Isaac:_Rebirth wiki"
            className="text-gray-200 underline"
          >
            Rebirth Wiki
          </a>
        </p>
        <button
          type="button"
          onClick={() => window.scrollTo(0, 0)}
          className="fixed flex items-center justify-center text-white bg-gray-900 bg-center bg-cover rounded-full cursor-pointer w-14 h-14 right-10 bottom-10 pixelated"
          style={{
            backgroundImage:
              "url(https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ef/Collectible_The_Ladder_icon.png)",
          }}
        ></button>
      </div>
    </Router>
  );
}

export default App;
