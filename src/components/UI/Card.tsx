type CardProps = {
  image: string;
  name: string;
  description: string;
  unlock?: string;
  message?: string;
  type?: string;
};

export default function Card({
  image,
  name,
  description,
  unlock,
  message,
  type
}: CardProps) {
  return (
    <div
      className="flex items-start px-6 py-5 space-x-3 text-gray-300 bg-gray-800 border-2 border-gray-900 rounded-lg shadow-sm hover:border-gray-900 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
    >
      <div className="flex-shrink-0">
        <img src={image} alt={name} className="w-8 pixelated" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-3">
          <p className="text-sm font-medium">{name} {type && ({type})}</p>
        </div>
        {message && <p className="text-xs text-gray-500">{message}</p>}
        <p className="text-sm">{description}</p>
        {unlock && (
          <p className="text-xs text-gray-400">Unlock method: {unlock}</p>
        )}
      </div>
    </div>
  );
}
