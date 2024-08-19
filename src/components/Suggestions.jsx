export default function Suggestions({ options, onSelect }) {
  return (
    <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
      {options.map((optionItem, index) => (
        <li key={index}>
          <button
            className="text-left text-sm w-full px-2 py-1 cursor-pointer"
            onClick={() => onSelect(optionItem)}
          >
            {optionItem._source.name} {(optionItem._source.location.lat.toFixed(3))}, {(optionItem._source.location.lon.toFixed(3))}
          </button>
        </li>
      ))}
    </ul>
  );
}
