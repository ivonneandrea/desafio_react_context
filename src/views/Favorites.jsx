import { useContext } from "react";
import { PhotosContext } from "../components/context/PhotosContext";
import IconHeart from "../components/IconHeart";

const Favorites = () => {
    const { photos, setPhotos } = useContext(PhotosContext);

    const deleteFavorite = (id) => {
        const photosNew = photos.map((photo) => {
            if (photo.id === id) {
                return { ...photo, isFavorite: false };
            } else return photo;
        });
        setPhotos(photosNew);
    };

    const photosFilter = photos.filter((filter) => filter.isFavorite === true);

    return (
        <div className="p-3 gallery grid-columns-4">
            {photosFilter.map((photo, p) => (
                <section
                    key={p}
                    onClick={() => deleteFavorite(photo.id)}
                    className="photoFavorites"
                    style={{ backgroundImage: `url(${photo.src.portrait})` }}>
                    <article className="galleryIcon">
                        <IconHeart filled={photo.isFavorite} />
                    </article>
                    <article>
                        <p className="galleryAlt">
                            Photographer: {photo.photographer}
                        </p>
                    </article>
                </section>
            ))}
        </div>
    );
};
export default Favorites;
