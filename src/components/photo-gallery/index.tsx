import Image from "next/image";
import { useEffect, useState } from "react";

interface PhotoGalleryProps {
  photos: string[];
  title?: string;
  description?: string;
  shuffleOnMount?: boolean;
}

const PhotoGallery = ({
  photos,
  title = "Event Photo Gallery",
  description = "Browse through photos from our various events and celebrations.",
  shuffleOnMount = false,
}: PhotoGalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);
  const [displayPhotos, setDisplayPhotos] = useState<string[]>(photos);

  // Shuffle array function
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Initialize photos (shuffle if needed)
  useEffect(() => {
    if (shuffleOnMount) {
      setDisplayPhotos(shuffleArray(photos));
    } else {
      setDisplayPhotos(photos);
    }
  }, [photos, shuffleOnMount]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;

      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        navigatePhoto(-1);
      } else if (e.key === "ArrowRight") {
        navigatePhoto(1);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedPhoto, currentPhotoIndex]);

  const openModal = (photo: string, index: number) => {
    setSelectedPhoto(photo);
    setCurrentPhotoIndex(index);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: number) => {
    const newIndex = currentPhotoIndex + direction;
    if (newIndex >= 0 && newIndex < displayPhotos.length) {
      setCurrentPhotoIndex(newIndex);
      setSelectedPhoto(displayPhotos[newIndex]);
    }
  };

  return (
    <>
      <div className="past-events-page__gallery-section">
        {title && (
          <h2 className="past-events-page__section-title">{title}</h2>
        )}
        {description && (
          <p className="past-events-page__gallery-description">{description}</p>
        )}

        <div className="past-events-page__gallery">
          {displayPhotos.map((photo, index) => {
            // Create different sizes for masonry layout
            const sizes = ["small", "medium", "large"];
            const randomSize = sizes[index % 3];

            return (
              <div
                key={index}
                className={`past-events-page__gallery-item past-events-page__gallery-item--${randomSize}`}
                onClick={() => openModal(photo, index)}
              >
                <Image
                  src={photo}
                  alt={`Event photo ${index + 1}`}
                  width={400}
                  height={400}
                  className="past-events-page__gallery-image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="past-events-page__gallery-overlay">
                  <span className="past-events-page__gallery-zoom">🔍</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for enlarged photo view */}
      {selectedPhoto && (
        <div className="past-events-page__modal" onClick={closeModal}>
          <div
            className="past-events-page__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="past-events-page__modal-close"
              onClick={closeModal}
            >
              ×
            </button>

            {/* Navigation arrows */}
            {currentPhotoIndex > 0 && (
              <button
                className="past-events-page__modal-nav past-events-page__modal-nav--prev"
                onClick={() => navigatePhoto(-1)}
              >
                ‹
              </button>
            )}

            {currentPhotoIndex < displayPhotos.length - 1 && (
              <button
                className="past-events-page__modal-nav past-events-page__modal-nav--next"
                onClick={() => navigatePhoto(1)}
              >
                ›
              </button>
            )}

            <img
              src={selectedPhoto}
              alt={`Event photo ${currentPhotoIndex + 1} of ${displayPhotos.length}`}
              className="past-events-page__modal-image"
            />

            {/* Photo counter */}
            <div className="past-events-page__modal-counter">
              {currentPhotoIndex + 1} / {displayPhotos.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
