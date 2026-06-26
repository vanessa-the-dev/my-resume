import { SearchIcon } from "./icons.jsx";

/**
 * The rounded Google-style search box: a search form with a leading icon,
 * a text input, and an optional trailing slot (`children`) for controls.
 *
 * @param className  Extra classes for the box (size, border radius, shadow).
 * @param iconSize   Size of the leading search icon.
 * @param inputRef   Ref forwarded to the <input>.
 * @param inputProps Props spread onto the <input> (value, onChange, …).
 * @param onSubmit   Form submit handler (fires on Enter / submit button).
 */
const SearchField = ({ className = "", iconSize = 20, inputRef, inputProps, onSubmit, children }) => (
  <form role="search" onSubmit={onSubmit} className={`g-searchbox ${className}`}>
    <input
      ref={inputRef}
      type="text"
      autoComplete="off"
      spellCheck="false"
      aria-label="Search"
      className="h-full flex-1 border-none bg-transparent text-base text-gtext outline-none"
      {...inputProps}
    />
    {children}
  </form>
);

export default SearchField;
