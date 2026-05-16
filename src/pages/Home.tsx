import Hero from "../components/Hero";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}

      <section id="home">
        <Hero />
      </section>

      {/* ABOUT SECTION */}

      <section id="about" className="about-section">
        <h1>About Lenscraft</h1>

        <p>
          Andrew Lenscraft is a modern photography portfolio focused on
          cinematic visuals, creative storytelling, and immersive digital
          experiences. Every frame captures emotion, depth, and artistic
          perspective.
        </p>
      </section>

      {/* GALLERY SECTION */}

      <Gallery />

      {/* CONTACT SECTION */}

      <section id="contact" className="contact-section">
        <h1>Contact</h1>

        <p>
          Let's collaborate and create visually stunning stories through
          photography, cinematic aesthetics, and modern design.
        </p>

        <div className="contact-buttons">
          {/* EMAIL BUTTON */}

          <a href="mailto:andrewwilson9441@gmail.com">
            <button className="primary-btn">Email Me</button>
          </a>

          {/* INSTAGRAM BUTTON */}

          <a
            href="https://www.instagram.com/andrew_5667?igsh=ZTI0MmRtaDNxdXMy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="secondary-btn">Instagram</button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
