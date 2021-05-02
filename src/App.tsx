import { useEffect, useState } from "react";
import ItemCard from "./components/UI/ItemCard";
import Navbar from "./components/UI/Navbar";
import { Item } from "./types"

function App() {
  const [items, setItems] = useState<Array<Item>>([]);
  const [search, setSearch] = useState<String>("");
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((itemList: Array<Item>) => {
        setItems(itemList);
      });
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="pt-4 pb-8">
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-300"
          >
            Search
          </label>
          <div className="mt-1">
            <input
              type="search"
              name="search"
              id="search"
              autoComplete="off"
              onChange={({ target }) => setSearch(target.value.toLowerCase())}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
              placeholder="Bob's Rotten Head"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 pb-12 sm:grid-cols-2">
          {items
            .filter((item) => item.name.toLowerCase().includes("" + search))
            .map((item) => (
              <ItemCard item={item} />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
