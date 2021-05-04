type LoadingCardsProps = {
  number: number;
};

export default function LoadingCards({ number }: LoadingCardsProps) {
  return (
    <>
      {[...Array(number)].map((e, i) => (
        <div key={Math.random().toString(32).substring(8)} className="w-full p-4 mx-auto bg-gray-800 rounded-md shadow ">
        <div className="flex space-x-4 animate-pulse">
          <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
          <div className="flex-1 py-1 space-y-4">
            <div className="w-1/4 h-4 bg-gray-600 rounded"></div>
            <div className="space-y-2">
              <div className="w-full h-4 bg-gray-600 rounded"></div>
              <div className="w-5/6 h-4 bg-gray-600 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      ))}
    </>
  );
}
