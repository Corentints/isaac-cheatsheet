import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">{/* img */}</div>
                <div className="hidden lg:block">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <span className="flex items-center px-3 py-2 space-x-2 text-sm font-medium text-white bg-gray-900 rounded-md">
                      <img
                        className="w-6 h-6 pixelated"
                        src="https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/80/Collectible_Nancy_Bombs_icon.png"
                        alt="Items"
                      />
                      <span>items</span>
                    </span>
                    <span className="flex items-center px-3 py-2 space-x-2 text-sm font-medium text-gray-300 rounded-md">
                      <img
                        className="w-6 h-6 pixelated"
                        src="https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a2/FaceCard.png"
                        alt="Items"
                      />
                      <span>cards</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="justify-center flex-1 hidden lg:ml-6 lg:justify-end lg:flex">
                <button type="button">
                  <SearchIcon
                    className="w-5 h-5 text-gray-300"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
              <span className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md">
                <img
                  className="w-6 h-6 pixelated"
                  src="https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/80/Collectible_Nancy_Bombs_icon.png"
                  alt="Items"
                />
                <span>items</span>
              </span>
              <span className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
                <img
                  className="w-6 h-6 pixelated"
                  src="https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a2/FaceCard.png"
                  alt="Items"
                />
                <span>cards</span>
              </span>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
