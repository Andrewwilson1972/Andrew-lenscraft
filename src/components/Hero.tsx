const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="hero-content" data-aos="fade-right">
        <p className="subtitle">CINEMATIC PHOTOGRAPHY</p>

        <h1>Andrew Lenscraft</h1>

        <p className="description">
          Capturing moments through creativity, cinematic visuals, and modern
          storytelling.
        </p>

        <div className="hero-buttons">
          <a href="#gallery">
            <button className="primary-btn">Explore Gallery</button>
          </a>

          <a href="#contact">
            <button className="secondary-btn">Contact Me</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
