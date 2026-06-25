import { useState } from "react";
import { keyForQuery } from "../resumeData.js";
import TopBar from "./TopBar.jsx";
import PhotoModal from "./PhotoModal.jsx";
import Footer from "./Footer.jsx";
import SearchField from "./SearchField.jsx";
import SearchTabs from "./SearchTabs.jsx";
import ResultPages from "./ResultPages.jsx";
import { SearchIcon, Wordmark } from "./icons.jsx";

const ResultsView = ({ query, submittedQuery, onQueryChange, onSearch, onHome }) => {
  const [isPhotoOpen, setPhotoOpen] = useState(false);

  return (
    <>
      <TopBar onImagesClick={() => setPhotoOpen(true)} />
      <PhotoModal open={isPhotoOpen} onClose={() => setPhotoOpen(false)} />

    <header className="border-b border-[#ebebeb]">
      <div className="flex flex-wrap items-center gap-[22px] pl-7 pr-5 pt-[18px]">
        <button
          type="button"
          onClick={onHome}
          aria-label="Back to home"
          className="cursor-pointer select-none whitespace-nowrap text-[27px] font-medium tracking-[-1.5px]"
        >
          <Wordmark text="Vanessa" />
        </button>

        <div className="min-w-[200px] max-w-[640px] flex-1">
          <SearchField
            className="h-11 rounded-3xl border-transparent shadow-[0_1px_6px_rgba(32,33,36,.18)]"
            iconSize={18}
            onSubmit={(event) => {
              event.preventDefault();
              onSearch(query);
            }}
            inputProps={{
              value: query,
              onChange: (event) => onQueryChange(event.target.value),
            }}
          >
            <button type="submit" className="g-trail-icon" title="Search" aria-label="Search">
              <SearchIcon size={20} color="#4285F4" />
            </button>
          </SearchField>
        </div>
      </div>

      <SearchTabs onSelect={onSearch} />
    </header>

    <main className="px-5 pb-16 pt-5 md:pl-[170px]">
      <ResultPages pageKey={keyForQuery(submittedQuery)} search={onSearch} />
    </main>

    <Footer />
    </>
  );
};

export default ResultsView;
