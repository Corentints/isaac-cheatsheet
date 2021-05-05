import { Disclosure } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import { CardRune, DiceRoom, Item, Trinket } from "../../types";
import GlobalSearch from "./GlobalSearch";
import { useState } from "react";

type NavbarProps = {
  items: Array<Item>;
  cardsRunes: Array<CardRune>;
  trinkets: Array<Trinket>;
  diceRooms: Array<DiceRoom>;
};

export default function Navbar({ items, cardsRunes, trinkets, diceRooms }: NavbarProps) {
  const [openGlobalSearch, setOpenGlobalSearch] = useState(false);
  return (
    <div>
      <Disclosure as="nav" className="fixed w-screen bg-gray-800">
        {({ open }) => (
          <>
            <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
              <div className="relative flex items-center justify-between h-16 md:pr-4 xl:pr-2">
                <div className="flex items-center px-2 lg:px-0">
                  <div className="flex-shrink-0">{/* img */}</div>
                  <div className="hidden lg:block">
                    <div className="flex space-x-4">
                      <NavLink
                        exact
                        to="/items"
                        activeClassName="bg-gray-900 rounded-md"
                      >
                        <span className="flex items-center px-3 py-2 space-x-2 text-sm font-medium text-gray-300 rounded-md">
                          <img
                            className="w-8 h-8 pixelated"
                            src="https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e7/Collectible_Rainbow_Baby_icon.png"
                            alt="Items"
                          />
                          <span>items</span>
                        </span>
                      </NavLink>
                      <NavLink
                        exact
                        to="/cards-runes"
                        activeClassName="bg-gray-900 rounded-md"
                      >
                        <span className="flex items-center px-3 py-2 space-x-2 text-sm font-medium text-gray-300 rounded-md">
                          <img
                            className="w-6 h-auto pixelated"
                            src="https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ae/Pickup_Soul_of_Eden_icon.png"
                            alt="Cards/Runes"
                          />
                          <span>cards/runes</span>
                        </span>
                      </NavLink>
                      <NavLink
                        exact
                        to="/trinkets"
                        activeClassName="bg-gray-900 rounded-md"
                      >
                        <span className="flex items-center px-3 py-2 space-x-2 text-sm font-medium text-gray-300 rounded-md">
                          <img
                            className="w-8 h-8 pixelated"
                            src="https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5c/Trinket_Rainbow_Worm_icon.png"
                            alt="Trinkets"
                          />
                          <span>trinkets</span>
                        </span>
                      </NavLink>
                      <NavLink
                        exact
                        to="/dice-rooms"
                        activeClassName="bg-gray-900 rounded-md"
                      >
                        <span className="flex items-center px-3 py-2 mt-1 space-x-2 text-sm font-medium text-gray-300 rounded-md">
                          <img
                            className="w-8 h-8 pixelated"
                            src="https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/78/Collectible_D20_icon.png"
                            alt="Dice rooms"
                          />
                          <span>dice rooms</span>
                        </span>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="justify-center flex-1 lg:ml-6 lg:justify-end lg:flex">
                  <button
                    type="button"
                    className="flex items-center justify-between py-3 text-gray-200 bg-gray-800 rounded-lg lg:px-2"
                    onClick={() => setOpenGlobalSearch(true)}
                  >
                    <SearchIcon
                      className="w-5 h-5 text-gray-300"
                      aria-hidden="true"
                    />
                    <span className="pl-3">Search</span>
                  </button>
                  <GlobalSearch
                    open={openGlobalSearch}
                    setOpen={setOpenGlobalSearch}
                    items={items}
                    cardsRunes={cardsRunes}
                    trinkets={trinkets}
                    diceRooms={diceRooms}
                  />
                </div>
                <div className="flex lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 mr-4 text-gray-400 rounded-md sm:mr-2 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <NavLink
                  exact
                  to="/items"
                  activeClassName="bg-gray-900 rounded-md"
                >
                  <span className="flex items-center px-3 py-2 space-x-2 text-sm font-medium text-gray-300 rounded-md">
                    <img
                      className="w-8 h-8 pixelated"
                      src="https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e7/Collectible_Rainbow_Baby_icon.png"
                      alt="Items"
                    />
                    <span>items</span>
                  </span>
                </NavLink>
                <NavLink
                  exact
                  to="/cards-runes"
                  activeClassName="bg-gray-900 rounded-md"
                >
                  <span className="flex items-center px-3 py-2 space-x-2 text-sm font-medium text-gray-300 rounded-md">
                    <img
                      className="w-6 h-auto pixelated"
                      src="https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/ae/Pickup_Soul_of_Eden_icon.png"
                      alt="Cards/Runes"
                    />
                    <span>cards/runes</span>
                  </span>
                </NavLink>
                <NavLink
                  exact
                  to="/trinkets"
                  activeClassName="bg-gray-900 rounded-md"
                >
                  <span className="flex items-center px-3 py-2 space-x-2 text-sm font-medium text-gray-300 rounded-md">
                    <img
                      className="w-8 h-8 pixelated"
                      src="https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/5/5c/Trinket_Rainbow_Worm_icon.png"
                      alt="Trinkets"
                    />
                    <span>trinkets</span>
                  </span>
                </NavLink>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
