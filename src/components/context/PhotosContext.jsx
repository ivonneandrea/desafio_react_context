import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PhotosContext = createContext();

const urlPhotos = "./photos.json";

const PhotosProvider = ({ children }) => {
    const [photos, setPhotos] = useState([]);
    const getPhotos = async () => {
        try {
            const response = await axios.get(urlPhotos);
            if (!response.status) {
                throw new Error("Datos no encontrados");
            }
            const { photos: photosData } = response.data;
            setPhotos(
                photosData.map((photo) => ({ ...photo, isFavorite: false }))
            );
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getPhotos();
    }, []);

    return (
        <PhotosContext.Provider
            value={{
                photos,
                setPhotos,
            }}>
            {children}
        </PhotosContext.Provider>
    );
};

export default PhotosProvider;
