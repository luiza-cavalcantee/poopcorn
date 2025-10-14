import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState<string>("");

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
