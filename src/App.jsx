import { useEffect, useState } from "react";
import HomeView from "./components/HomeView.jsx";
import ResultsView from "./components/ResultsView.jsx";

/**
 * Top-level controller. Owns the routing state — the current input (`query`)
 * and the search that produced the results view (`submittedQuery`, null = home)
 * — and delegates rendering to HomeView / ResultsView.
 */
const App = () => {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState(null);

  const runSearch = (rawQuery) => {
    const text = (rawQuery || "").trim();
    if (!text) return;
    setSubmittedQuery(text);
    setQuery(text);
    window.scrollTo(0, 0);
    history.replaceState(null, "", `#q=${encodeURIComponent(text)}`);
  };

  const goHome = () => {
    setSubmittedQuery(null);
    setQuery("");
    history.replaceState(null, "", "#");
  };

  // Deep-link support: run a query from the URL hash (#q=…) on first load.
  useEffect(() => {
    const match = location.hash.match(/q=([^&]+)/);
    if (match) runSearch(decodeURIComponent(match[1]));
  }, []);

  if (submittedQuery === null) {
    return <HomeView query={query} onQueryChange={setQuery} onSearch={runSearch} />;
  }

  return (
    <ResultsView
      query={query}
      submittedQuery={submittedQuery}
      onQueryChange={setQuery}
      onSearch={runSearch}
      onHome={goHome}
    />
  );
};

export default App;
