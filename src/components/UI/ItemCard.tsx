import { Item } from "../../types";

type ItemCardProps = {
    item: Item;
  };

export default function ItemCard({item}: ItemCardProps) {
  return (
    <div
      key={item.id}
      className="flex items-start px-6 py-5 space-x-3 text-gray-300 bg-gray-800 border-2 border-gray-900 rounded-lg shadow-sm hover:border-gray-900 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
    >
      <div className="flex-shrink-0">
        <img
          className="w-10 h-10 rounded-full pixelated"
          src={item.image}
          alt={item.name}
        />
      </div>
      <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-3">
            <p className="text-sm font-medium">{item.name}</p>
          </div>
          <p className="text-sm">{item.description}</p>
      </div>
    </div>
  );
}