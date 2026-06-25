import { useEffect, useMemo, useRef, useState } from "react";
import { SUGGESTIONS } from "./resumeData.js";
import {
  SearchIcon,
  MicIcon,
  LensIcon,
  SparkleIcon,
  AppsIcon,
  Wordmark,
} from "./components/icons.jsx";

import vanessa from './assets/images/vanessa.jfif';

const TopBar = ({ onImagesClick }) => {
  return (
    <div className="flex h-[60px] items-center justify-end gap-4 px-4 text-[13px]">
      <a href="#" onClick={(e) => e.preventDefault()} className="text-black hover:underline">
        Gmail
      </a>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onImagesClick();
        }}
        className="text-black hover:underline"
      >
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
  const [open, setOpen] = useState(false);           // suggestions dropdown open?
  const [photoOpen, setPhotoOpen] = useState(false); // photo modal open?
  const [highlight, setHighlight] = useState(-1);    // keyboard-highlighted suggestion
  const wrapRef = useRef(null);
  const inputRef = useRef(null);

  /* Suggestions filtered by what's typed */
  const filtered = useMemo(() => {
    const f = query.toLowerCase().trim();
    if (!f) return SUGGESTIONS;
    return SUGGESTIONS.filter((s) => s.q.toLowerCase().includes(f));
  }, [query]);

  const runSearch = (q) => {
    const text = (q || "").trim();
    if (!text) return;
    setQuery(text);
    setOpen(false);
    setHighlight(-1);
  }

  /* Keyboard nav in the search box */
  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setHighlight((h) => Math.min(h + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter") {
      if (highlight >= 0 && filtered[highlight]) runSearch(filtered[highlight].q);
      else runSearch(query);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  /* Close dropdown on outside click */
  useEffect(() => {
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  /* Close the photo modal on Escape */
  useEffect(() => {
    if (!photoOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setPhotoOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [photoOpen]);

  /* Render a suggestion label, bolding the part not yet typed */
  const renderLabel = (text) => {
    const f = query.toLowerCase().trim();
    if (f && text.toLowerCase().startsWith(f)) {
      return (
        <>
          {text.slice(0, f.length)}
          <b className="font-medium">{text.slice(f.length)}</b>
        </>
      );
    }
    return <b className="font-medium">{text}</b>;
  }

  const comboOpen = open && filtered.length > 0;

  return (
    <>
      <TopBar onImagesClick={() => setPhotoOpen(true)} />

      {photoOpen && (
        <div
          className="fixed inset-0 z-[50] flex items-center justify-center bg-black/70 p-6"
          onClick={() => setPhotoOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Vanessa photo"
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setPhotoOpen(false)}
              aria-label="Close"
              className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-xl leading-none text-gtext shadow-md hover:bg-ghover"
            >
              ×
            </button>
            <img
              src={vanessa}
              alt="Vanessa"
              className="max-h-[80vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            />
          </div>
        </div>
      )}

      <div className="flex flex-col items-center mt-[9vh]">
        <div className="mb-6 select-none text-center text-[92px] font-medium tracking-[-5px]">
          <Wordmark text="Vanessa" />
          <span className="mt-2 block text-sm font-normal tracking-normal text-ggrey">
            An interactive résumé · type or pick a suggestion below
          </span>
        </div>

        <div className="relative z-[5] w-full max-w-[584px] px-5" ref={wrapRef}>
          <div
            className={
              "flex h-[46px] items-center border bg-white px-3.5 transition " +
              (comboOpen
                ? "rounded-t-3xl border-transparent border-b-[#ececec] shadow-[0_1px_6px_rgba(32,33,36,.28)]"
                : "rounded-3xl border-gborder hover:border-transparent hover:shadow-[0_1px_6px_rgba(32,33,36,.28)]")
            }
          >
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
              onChange={(e) => {
                setQuery(e.target.value);
                setOpen(true);
                setHighlight(-1);
              }}
              onFocus={() => setOpen(true)}
              onKeyDown={onKeyDown}
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

          {comboOpen && (
            <div className="absolute inset-x-5 z-[4] rounded-b-3xl border border-t-0 border-gborder bg-white pb-2.5 pt-1.5 shadow-[0_4px_6px_rgba(32,33,36,.28)]">
              {filtered.map((s, i) => (
                <div
                  key={s.q}
                  className={
                    "flex cursor-pointer items-center gap-3.5 px-[18px] py-[7px] text-base text-gtext " +
                    (i === highlight ? "bg-ghover" : "hover:bg-ghover")
                  }
                  onMouseEnter={() => setHighlight(i)}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    runSearch(s.q);
                  }}
                >
                  <span className="flex w-5 text-[#9aa0a6]">
                    <SearchIcon size={18} color="#9aa0a6" />
                  </span>
                  <span className="flex-1">{renderLabel(s.q)}</span>
                </div>
              ))}
            </div>
          )}
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