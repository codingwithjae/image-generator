import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import sample from "/src/images/sample.png";
import "react-loading-skeleton/dist/skeleton.css";
import "./Card.styles.css";

function Card({ imageUrl }) {
  const imageSrc = imageUrl || sample; // Si no hay imageUrl, usa la imagen de muestra
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (imageUrl) {
      // Cuando hay una nueva imageUrl, establece el estado de carga a true (mostrará el skeleton)
      setLoading(true);
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => setLoading(false); // Una vez que la imagen se cargue, oculta el skeleton
    } else {
      setLoading(false); // Si no hay imageUrl, no mostrar skeleton y usar sample directamente
    }
  }, [imageUrl]);

  return (
    <section className="card">
      <figure className="card__image-container">
        {loading ? (
          <Skeleton width={512} height={512} borderRadius={10} />
        ) : (
          <img className="card__image" src={imageSrc} alt="Generated" />
        )}
      </figure>
    </section>
  );
}

export { Card };
