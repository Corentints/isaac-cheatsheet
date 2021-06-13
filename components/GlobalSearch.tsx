import {CardRune, DiceRoom, Item, Transformation, Trinket} from "../types";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Card from "./Card";
import TransformationCard from "./TransformationCard";

type GlobalSearchProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

type SearchResult = {
  results: Array<Item | Trinket | CardRune | DiceRoom>;
  transformations: Array<Transformation>;
};

export default function GlobalSearch({ open, setOpen }: GlobalSearchProps) {
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<
    Array<Item | CardRune | DiceRoom | Trinket>
  >([]);
  const [searchTransformationResults, setSearchTransformationResults] = useState<
      Array<Transformation>>([]);

  const handleSearch = (search: string) => {
    fetch("/api/search?search=" + search)
      .then((result) => result.json())
      .then((result: SearchResult) => {
            setSearchResults([...Object.values(result.results)])
            setSearchTransformationResults([...Object.values(result.transformations)])
          }
      );
  };

  useEffect(() => {
    handleSearch(search);
  }, [search]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 z-10 overflow-y-auto"
        open={open}
        onClose={setOpen}
      >
        <div className="flex items-start justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
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
            <div className="inline-block w-full px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-gray-700 rounded-lg shadow-xl w-ful sm:my-8 sm:align-top sm:max-w-xl sm:p-2">
              <div>
                <input
                  onChange={({ target }) => setSearch(target.value)}
                  value={search}
                  type="text"
                  name="search"
                  autoComplete="off"
                  className="block w-full text-gray-800 placeholder-gray-800 bg-gray-200 border-gray-700 rounded-md shadow-sm focus:ring-gray-800 focus:border-gray-800 sm:text-sm"
                  placeholder="Breath of Life"
                />
              </div>
              <div className="flex flex-col mt-3 space-y-3">
                {searchResults.length > 0 &&
                  searchResults.map((entity) => (
                    <Card
                      key={entity.name + entity.id}
                      image={entity.image}
                      name={entity.name}
                      description={entity.description}
                    />
                  ))}
                {searchTransformationResults.length > 0 &&
                searchTransformationResults.map((transformation) => (
                    <TransformationCard
                        key={transformation.id}
                        transformation={transformation}
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
