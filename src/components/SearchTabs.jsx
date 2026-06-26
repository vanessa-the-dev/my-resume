import { SEARCH_TABS, keyForQuery } from "../resumeData.js";

const ALL_PAGE = "all";
const TAB = "flex items-center gap-1.5 border-b-[3px] px-3 pb-3";
const ACTIVE = "border-gblue text-gblue";
const INACTIVE = "border-transparent hover:text-gtext";

/** The page a tab leads to, e.g. "work", "about", or "all". */
const pageOf = (tab) => keyForQuery(tab.q);

/**
 * Result-category tabs (All / About / Work / …), data-driven from SEARCH_TABS.
 * The tab whose destination matches `activePage` is highlighted. "All" owns the
 * combined feed and also acts as the fallback for pages without their own tab
 * (e.g. skills, contact, free-text searches).
 */
const SearchTabs = ({ activePage, onSelect }) => {
  const ownedBySection = SEARCH_TABS.some(
    (tab) => pageOf(tab) !== ALL_PAGE && pageOf(tab) === activePage
  );
  const isActive = (tab) =>
    pageOf(tab) === ALL_PAGE ? !ownedBySection : pageOf(tab) === activePage;

  return (
    <nav aria-label="Result categories" className="flex pl-[150px] pt-3.5 text-[13px] text-ggrey">
      {SEARCH_TABS.map((tab) => {
        const active = isActive(tab);
        const className = `${TAB} ${active ? ACTIVE : INACTIVE}`;

        // The active tab is a static marker; the rest are buttons that switch
        // category (including "All", which jumps to the combined feed).
        return active ? (
          <span key={tab.label} aria-current="page" className={className}>
            {tab.icon} {tab.label}
          </span>
        ) : (
          <button
            key={tab.label}
            type="button"
            onClick={() => onSelect(tab.q)}
            className={`${className} cursor-pointer`}
          >
            {tab.icon} {tab.label}
          </button>
        );
      })}
    </nav>
  );
};

export default SearchTabs;
