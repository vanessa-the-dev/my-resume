import { useEffect, useMemo, useRef, useState } from "react";
import { SUGGESTIONS, DEFAULT_QUERY } from "../resumeData.js";
import TopBar from "./TopBar.jsx";
import PhotoModal from "./PhotoModal.jsx";
import SearchField from "./SearchField.jsx";
import SearchSuggestions from "./SearchSuggestions.jsx";
import { MicIcon, LensIcon, SparkleIcon, Wordmark } from "./icons.jsx";

const HERO_SUBTITLE = "An interactive résumé · type or pick a suggestion below";

const HomeView = ({ query, onQueryChange, onSearch }) => {
  const [isPhotoOpen, setPhotoOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const searchAreaRef = useRef(null); // wraps the field + dropdown for outside-click
  const inputRef = useRef(null);

  const suggestions = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return SUGGESTIONS;
    return SUGGESTIONS.filter((s) => s.q.toLowerCase().includes(needle));
  }, [query]);

  const isDropdownVisible = isDropdownOpen && suggestions.length > 0;

  // Focus the search box whenever the home view mounts.
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Close the dropdown when clicking outside the search area.
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (searchAreaRef.current && !searchAreaRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const submitSearch = (event) => {
    event.preventDefault();
    const picked = highlightedIndex >= 0 ? suggestions[highlightedIndex] : null;
    onSearch(picked ? picked.q : query);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setDropdownOpen(true);
      setHighlightedIndex((index) => Math.min(index + 1, suggestions.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlightedIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === "Escape") {
      setDropdownOpen(false);
    }
  };

  // Render a suggestion, bolding the not-yet-typed remainder.
  const renderSuggestionLabel = (text) => {
    const needle = query.trim().toLowerCase();
    if (needle && text.toLowerCase().startsWith(needle)) {
      return (
        <>
          {text.slice(0, needle.length)}
          <b className="font-medium">{text.slice(needle.length)}</b>
        </>
      );
    }
    return <b className="font-medium">{text}</b>;
  };

  const boxShape = isDropdownVisible
    ? "rounded-t-3xl border-transparent border-b-[#ececec] shadow-[0_1px_6px_rgba(32,33,36,.28)]"
    : "rounded-3xl border-gborder hover:border-transparent hover:shadow-[0_1px_6px_rgba(32,33,36,.28)]";

  return (
    <>
      <TopBar onImagesClick={() => setPhotoOpen(true)} />
      <PhotoModal open={isPhotoOpen} onClose={() => setPhotoOpen(false)} />

      <main className="mt-[9vh] flex flex-col items-center">
        <header className="mb-6 select-none text-center">
          <h1 className="text-[92px] font-medium tracking-[-5px]">
            <Wordmark text="Vanessa" />
          </h1>
          <p className="mt-2 text-sm text-ggrey">{HERO_SUBTITLE}</p>
        </header>

        <div ref={searchAreaRef} className="relative z-[5] w-full max-w-[584px] px-5">
          <SearchField
            className={`h-[46px] ${boxShape}`}
            inputRef={inputRef}
            onSubmit={submitSearch}
            inputProps={{
              value: query,
              placeholder: "Search Vanessa or type a URL",
              role: "combobox",
              "aria-expanded": isDropdownVisible,
              "aria-autocomplete": "list",
              onFocus: () => setDropdownOpen(true),
              onKeyDown: handleKeyDown,
              onChange: (event) => {
                onQueryChange(event.target.value);
                setDropdownOpen(true);
                setHighlightedIndex(-1);
              },
            }}
          >
            <div className="flex items-center gap-3.5">
              <button type="button" className="g-trail-icon" title="Voice" aria-label="Search by voice">
                <MicIcon />
              </button>
              <button type="button" className="g-trail-icon" title="Lens" aria-label="Search by image">
                <LensIcon />
              </button>
              <button
                type="button"
                title="AI Mode"
                className="flex cursor-pointer items-center gap-1.5 rounded-2xl px-2.5 py-1 text-sm font-medium text-gresult hover:bg-ghover"
              >
                <SparkleIcon /> AI Mode
              </button>
            </div>
          </SearchField>

          {isDropdownVisible && (
            <SearchSuggestions
              suggestions={suggestions}
              highlightedIndex={highlightedIndex}
              renderLabel={renderSuggestionLabel}
              onHighlight={setHighlightedIndex}
              onPick={onSearch}
            />
          )}
        </div>

        <div className="mt-7 flex gap-3">
          <button type="button" onClick={() => onSearch(DEFAULT_QUERY)} className="g-btn">
            Vanessa Search
          </button>
          <button type="button" onClick={() => onSearch(DEFAULT_QUERY)} className="g-btn">
            I'm Feeling Lucky
          </button>
        </div>
      </main>
    </>
  );
};

export default HomeView;
