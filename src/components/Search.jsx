import Header from "./Header";
import Suggestions from "./Suggestions";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}) {
  const resetInput = (e) => {
    e.target.value = "";
  };

  return (
    <div className="mt-10 w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-4 lg:p-10 h-full lg:h-auto bg-white bg-opacity-30 backdrop-blur-ls rounded drop-shadow-lg text-black-700">
      <Header />
      <div className="relative flex mt-10 md:mt-4">
        <input
          type="text"
          value={term}
          className="px-2 py-1 rounded-l-md border-2 border-white"
          placeholder="Search..."
          onFocus={(e) => resetInput(e)}
          onChange={onInputChange}
        />

        <Suggestions options={options} onSelect={onOptionSelect} />

        <button
          className="rounded-r-md border-2 border-zinc-200 hover:border-black-500 hover:text-zinc-500 text-black-800 px-2 py-1 cursor-pointer"
          onClick={onSubmit}
        >
          <FaMagnifyingGlass size={20} />
        </button>
      </div>
    </div>
  );
}
