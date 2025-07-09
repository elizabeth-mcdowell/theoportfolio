export default function Photos() {
    return (
      <div className="container">
        <h1>Photos</h1>
        <p>
          Here is a small sample of photography from my reporting adventures. More can be found{" "}
          <a
            href="https://www.instagram.com/theowithab?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>.
        </p>
        <img
          src="/photos/photo1.png"
          alt="Photo 1"
          style={{ width: "100%", maxWidth: "600px", borderRadius: "8px",}}
        />
        <img
          src="/photos/photo2.png"
          alt="Photo 2"
          style={{ width: "100%", maxWidth: "600px", borderRadius: "8px", }}
        />
        <img
          src="/photos/photo3.png"
          alt="Photo 3"
          style={{ width: "100%", maxWidth: "600px", borderRadius: "8px", }}
        />
                <img
          src="/photos/photo4.png"
          alt="Photo 4"
          style={{ width: "100%", maxWidth: "600px", borderRadius: "8px", }}
        />
                <img
          src="/photos/photo5.png"
          alt="Photo 5"
          style={{ width: "100%", maxWidth: "600px", borderRadius: "8px", }}
        />
      </div>
    );
  }
  