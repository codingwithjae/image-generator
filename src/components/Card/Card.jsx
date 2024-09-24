import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Card.styles.css";

function Card({ imageUrl }) {
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
          imageUrl && (
            <img
              className="card__image"
              src={imageUrl}
              alt="Generated image from prompt"
            />
          )
        )}
      </figure>
    </section>
  );
}

export { Card };
