import photo1 from "../assets/gallery/photo1.jpg";
import photo2 from "../assets/gallery/photo2.jpg";
import photo3 from "../assets/gallery/photo3.jpg";
import photo4 from "../assets/gallery/photo4.jpg";
import photo5 from "../assets/gallery/photo5.jpg";
import photo6 from "../assets/gallery/photo6.jpg";
import photo7 from "../assets/gallery/photo7.jpg";
import photo8 from "../assets/gallery/photo8.jpg";
import photo9 from "../assets/gallery/photo9.jpg";
import photo10 from "../assets/gallery/photo10.jpg";

const Gallery = () => {
  const images = [
    {
      src: photo1,
      title: "Spire",
    },

    {
      src: photo2,
      title: "Frost",
    },

    {
      src: photo3,
      title: "Cascade",
    },

    {
      src: photo4,
      title: "Marine",
    },

    {
      src: photo5,
      title: "Peak",
    },

    {
      src: photo6,
      title: "Summit",
    },

    {
      src: photo7,
      title: "Twilight",
    },

    {
      src: photo8,
      title: "Bloom",
    },

    {
      src: photo9,
      title: "Abstract",
    },

    {
      src: photo10,
      title: "Vista",
    },
  ];

  return (
    <section id="gallery" className="gallery-section">
      <h1 className="gallery-title">Gallery</h1>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-card" key={index}>
            <img src={image.src} alt={image.title} />

            <div className="gallery-caption">{image.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
