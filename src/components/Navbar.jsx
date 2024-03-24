import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <section className="navbar">
                <Link to="/"> Home </Link> | <Link to="/favorites"> Favoritos </Link>
            </section>
        </nav>
    );
};
export default Navbar;
