import { useRef, useState } from "react";
import {
  SearchIcon,
  MicIcon,
  LensIcon,
  SparkleIcon,
  AppsIcon,
  Wordmark,
} from "./components/icons.jsx";

const TopBar = () => {
  return (
    <div className="flex h-[60px] items-center justify-end gap-4 px-4 text-[13px]">
      <a href="#" onClick={(e) => e.preventDefault()} className="text-black hover:underline">
        Gmail
      </a>
      <a href="#" onClick={(e) => e.preventDefault()} className="text-black hover:underline">
        Images
      </a>
      <div
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black/5"
        title="Resume sections"
      >
        <AppsIcon />
      </div>
      <div
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#0b5345] text-[15px] font-medium text-white"
        title="Vanessa Isidro"
      >
        V
      </div>
    </div>
  );
}

const App = () => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const runSearch = (q) => {
    const text = (q || "").trim();
    if (!text) return;
    setQuery(text);
  }

  return (
    <>
      <TopBar />

      <div className="flex flex-col items-center mt-[9vh]">
        <div className="mb-6 select-none text-center text-[92px] font-medium tracking-[-5px]">
          <Wordmark text="Vanessa" />
          <span className="mt-2 block text-sm font-normal tracking-normal text-ggrey">
            An interactive résumé · type or pick a suggestion below
          </span>
        </div>

        <div className="relative z-[5] w-full max-w-[584px] px-5">
          <div className="flex h-[46px] items-center rounded-3xl border border-gborder bg-white px-3.5 transition hover:border-transparent hover:shadow-[0_1px_6px_rgba(32,33,36,.28)]">
            <span className="mr-3 flex text-[#9aa0a6]">
              <SearchIcon size={20} color="#9aa0a6" />
            </span>
            <input
              ref={inputRef}
              type="text"
              autoComplete="off"
              spellCheck="false"
              placeholder="Search Vanessa or type a URL"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && runSearch(query)}
              className="h-full flex-1 border-none bg-transparent text-base text-gtext outline-none"
            />
            <div className="flex items-center gap-3.5">
              <span className="flex cursor-pointer" title="Voice">
                <MicIcon />
              </span>
              <span className="flex cursor-pointer" title="Lens">
                <LensIcon />
              </span>
              <span className="flex cursor-pointer items-center gap-1.5 rounded-2xl px-2.5 py-1 text-sm font-medium text-gresult hover:bg-ghover" title="AI Mode">
                <SparkleIcon /> AI Mode
              </span>
            </div>
          </div>
        </div>

        <div className="mt-7 flex gap-3">
          <button
            onClick={() => runSearch("who is Vanessa Isidro?")}
            className="h-9 cursor-pointer rounded border border-ghover bg-ghover px-4 text-sm text-[#3c4043] hover:border-[#dadce0] hover:shadow-sm"
          >
            Vanessa Search
          </button>
        </div>
      </div>
    </>
  );
}

export default App