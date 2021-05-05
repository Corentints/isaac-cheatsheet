import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import Items from "./pages/Items";
import DiceRooms from "./pages/DiceRooms";
import Trinkets from "./pages/Trinkets";
import CardRunes from "./pages/CardsRunes";
import { useEffect, useState } from "react";
import { CardRune, DiceRoom, Item, Trinket } from "./types";
import load from "./util/fetchData";
import Footer from "./components/UI/Footer";

function App() {
  const [items, setItems] = useState<Array<Item>>([]);
  const [trinkets, setTrinkets] = useState<Array<Trinket>>([]);
  const [cardsRunes, setCardsRunes] = useState<Array<CardRune>>([]);
  const [diceRooms, setDiceRooms] = useState<Array<DiceRoom>>([]);

  useEffect(() => {
    load("items.json", setItems);
    load("trinkets.json", setTrinkets);
    load("cards-runes.json", setCardsRunes);
    load("dice-rooms.json", setDiceRooms);
  }, []);

  return (
    <Router>
      <Navbar items={items} cardsRunes={cardsRunes} trinkets={trinkets} diceRooms={diceRooms} />
      <div className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8 pt-[70px]">
        <Switch>
          <Route path="/items">
            <Items items={items} />
          </Route>
          <Route path="/trinkets">
            <Trinkets trinkets={trinkets} />
          </Route>
          <Route path="/cards-runes">
            <CardRunes cardsRunes={cardsRunes} />
          </Route>
          <Route path="/dice-rooms">
            <DiceRooms diceRooms={diceRooms} />
          </Route>
          <Route path="/">
            <Redirect to="/items" />
          </Route>
        </Switch>
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
      <Footer />
    </Router>
  );
}

export default App;
