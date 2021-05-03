import { CardRune } from "../../types";

type CardsRuneCardProps = {
    cardrune: CardRune;
  };

export default function CardsRunesCard({cardrune}: CardsRuneCardProps) {
  return (
    <div
      key={cardrune.id}
      className="flex items-start px-6 py-5 space-x-3 text-gray-300 bg-gray-800 border-2 border-gray-900 rounded-lg shadow-sm hover:border-gray-900 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
    >
      <div className="flex-shrink-0">
        <img
          className="w-8 h-auto"
          src={cardrune.image}
          alt={cardrune.name}
        />
      </div>
      <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-3">
            <p className="text-sm font-medium">{cardrune.name}</p>
          </div>
          <p className="text-xs text-gray-500">{cardrune.message}</p>
          <p className="text-sm">{cardrune.description}</p>
          <p className="text-xs text-gray-400">Unlock Method : {cardrune.unlock ? cardrune.unlock : 'Always available'}</p>
      </div>
    </div>
  );
}