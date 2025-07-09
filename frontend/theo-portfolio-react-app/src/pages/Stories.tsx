import { useState } from "react";
import { stories } from "../data/stories";
import SearchBar from "../components/SearchBar";
import StoryCard from "../components/StoryCard";
import "./Stories.css";
export default function Stories() {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All Publications");

  const publicationTypes = [
    "All Publications",
    ...Array.from(new Set(stories.map((s) => s.type)))
  ];

  const filtered = stories.filter((s) => {
    const matchesSearch = s.title.toLowerCase().includes(search.toLowerCase());
    const matchesType = filterType === "All Publications" || s.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">

    <h2 className="allstories-title">All stories</h2>
    <div className="search-and-filter">
      <SearchBar value={search} onChange={setSearch} />
      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
      >
        {publicationTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
      

      <div className="story-grid">
  {filtered.map((story) => (
    <StoryCard key={story.id} story={story} />
  ))}
</div>
    </div>
  );
}
