import { SEARCH_TABS } from "../resumeData.js";

const TAB = "flex items-center gap-1.5 border-b-[3px] border-transparent px-3 pb-3";

/** Result-category tabs (All / About / Work / …). Data-driven from SEARCH_TABS. */
const SearchTabs = ({ onSelect }) => (
  <nav aria-label="Result categories" className="flex pl-[150px] pt-3.5 text-[13px] text-ggrey">
    {SEARCH_TABS.map((tab) =>
      tab.q ? (
        <button key={tab.label} type="button" onClick={() => onSelect(tab.q)} className={`${TAB} cursor-pointer`}>
          {tab.icon} {tab.label}
        </button>
      ) : (
        <span key={tab.label} aria-current="page" className={`${TAB} border-gblue text-gblue`}>
          {tab.icon} {tab.label}
        </span>
      )
    )}
  </nav>
);

export default SearchTabs;
