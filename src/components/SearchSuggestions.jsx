import { SearchIcon } from "./icons.jsx";

/** Autocomplete dropdown rendered beneath the home search box. */
const SearchSuggestions = ({ suggestions, highlightedIndex, renderLabel, onHighlight, onPick }) => (
  <ul
    role="listbox"
    aria-label="Search suggestions"
    className="absolute inset-x-5 z-[4] rounded-b-3xl border border-t-0 border-gborder bg-white pb-2.5 pt-1.5 shadow-[0_4px_6px_rgba(32,33,36,.28)]"
  >
    {suggestions.map((suggestion, index) => (
      <li
        key={suggestion.q}
        role="option"
        aria-selected={index === highlightedIndex}
        onMouseEnter={() => onHighlight(index)}
        onMouseDown={(event) => {
          // mousedown (not click) so the pick fires before the input blurs
          event.preventDefault();
          onPick(suggestion.q);
        }}
        className={
          "flex cursor-pointer items-center gap-3.5 px-[18px] py-[7px] text-base text-gtext " +
          (index === highlightedIndex ? "bg-ghover" : "hover:bg-ghover")
        }
      >
        <span className="flex w-5 text-[#9aa0a6]">
          <SearchIcon size={18} color="#9aa0a6" />
        </span>
        <span className="flex-1">{renderLabel(suggestion.q)}</span>
      </li>
    ))}
  </ul>
);

export default SearchSuggestions;
