// src/components/StoryCard.tsx
import { Link } from "react-router-dom";
import type { Story } from "../data/stories";
import "./StoryCard.css";

interface Props {
  story: Story;
}

export default function StoryCard({ story }: Props) {
  return (
    <Link to={story.url} className="story-card">

      <img
        src={story.photo}
        alt={story.title}
        className="story-image"
      />
      <div className="story-footer">
        <div className="story-info">
          <p className="story-title">{story.title}</p>
          <p className="story-meta">
      
            {new Date(story.date).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <p className="story-summary">{story.summary}</p>
        </div>

      </div>
    </Link>
  );
}
