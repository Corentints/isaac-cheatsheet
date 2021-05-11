type SearchbarProps = {
  placeholder: string;
  onChange: Function;
};

export default function SearchBar({ placeholder, onChange }: SearchbarProps) {
  return (
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
          onChange={({ target }) => onChange(target.value.toLowerCase())}
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
