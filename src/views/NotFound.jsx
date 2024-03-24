import notFound from "../assets/icons/facetriste.jpeg";

const NotFound = () => {
    return (
        <section className="notFound">
            <h3>
                 La página que buscas no existe
            </h3>
            <img className="notFoundImg" src={notFound} alt="Carita Triste" />
        </section>
    );
};
export default NotFound;
