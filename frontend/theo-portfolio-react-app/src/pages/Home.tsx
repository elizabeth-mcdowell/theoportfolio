import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Hello! I'm Theo and I'm a journalist and photographer</h1>
        <div className="link-grid">
          <Link
            to="/about"
            className="link-tile"
            style={{ backgroundImage: "url('/images/theobabbitprofilepic.jpeg')"}}
          >
            <span>About me</span>
          </Link>
          <Link
            to="/stories"
            className="link-tile"
            style={{ backgroundImage: "url('/stories/portofchancay.png')"}}
          >
            <span>Stories</span>
          </Link>
          <Link
            to="/photos"
            className="link-tile"
            style={{ backgroundImage: "url('/images/TheodoreBabbitcameraphoto.jpg')"}}
          >
            <span>Photos</span>
          </Link>

        </div>
      </section>

      <section className="info-section">
        <div className="info-column">
          <h2>About me</h2>
          <p>
          I am graduating in August 2025 from Northeastern University with a journalism and international affairs
          combined major with a minor in political science. I am interested in developing the
          intersection between the above topics through academic writing, global reporting,
          visual storytelling and data journalism. In addition to being an editor for Northeastern
          University’s Global Journal, I am also member of 
          &ensp;
          <a href="https://www.theburningrose.com/post/theo-babbitt" target="_blank" rel="noopener noreferrer">
         
              Burning Rose
            </a>.
            
          During my free time, I enjoys taking photos, learning languages, and playing with my cat.
          </p>
        </div>
        <div className="info-column">
          <h2>Get in touch</h2>
          <p>
            I'm available for work and
            freelance assignments. Contact me via email at       &ensp;
            <b>
             theobabbitt02@gmail.com </b>
          </p>
        </div>
      </section>
    </div>
  );
}
