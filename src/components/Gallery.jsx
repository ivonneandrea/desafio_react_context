import { useContext } from "react";
import { PhotosContext } from "../components/context/PhotosContext";
import IconHeart from "../components/IconHeart";

const Gallery = () => {
    const { photos, setPhotos } = useContext(PhotosContext);

    const addFavorite = (id) => {
        const photosNew = photos.map((photo) => {
            if (photo.id === id) {
                return { ...photo, isFavorite: true };
            }
            return photo;
        });
        setPhotos(photosNew);
    };

    return (
        <div className="gallery grid-columns-5 p-3">
            {photos.map((photo, p) => (
                <section
                    key={p}
                    onClick={() => addFavorite(photo.id)}
                    className="photoGallery"
                    style={{ backgroundImage: `url(${photo.src.portrait})` }}>
                    <article className="galleryIcon">
                        <IconHeart filled={photo.isFavorite} />
                    </article>
                    <article>
                        <p className="galleryAlt">{photo.alt}</p>
                    </article>
                </section>
            ))}
        </div>
    );
};

export default Gallery;
