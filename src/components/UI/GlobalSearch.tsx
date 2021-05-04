import { CardRune, Item, Trinket } from "../../types";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Card from "./Card";

type GlobalSearchProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  items: Array<Item>;
  cardsRunes: Array<CardRune>;
  trinkets: Array<Trinket>;
};

export default function GlobalSearch({
  open,
  setOpen,
  items,
  cardsRunes,
  trinkets,
}: GlobalSearchProps) {
  const [search, setSearch] = useState("");

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 z-10 overflow-y-auto"
        open={open}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-gray-700 rounded-lg shadow-xl sm:my-8 sm:align-top sm:max-w-xl sm:w-full sm:p-2">
              <div>
                <input
                  onChange={({ target }) => setSearch(target.value.toLowerCase())}
                  value={search}
                  type="text"
                  name="search"
                  autoComplete="off"
                  className="block w-full text-gray-800 placeholder-gray-800 bg-gray-200 border-gray-700 rounded-md shadow-sm focus:ring-gray-800 focus:border-gray-800 sm:text-sm"
                  placeholder="Breath of Life"
                />
              </div>
              <div className="flex flex-col mt-3 space-y-3">
                {search.length > 1 &&
                  [...items, ...cardsRunes, ...trinkets]
                    .filter((item) => item.name.toLowerCase().includes(search))
                    .map((item) => (
                      <Card
                        key={item.name}
                        image={item.image}
                        name={item.name}
                        description={item.description}
                      />
                    ))}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
