import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { getCategories, getArtisans } from "../services/api";
import Logo from "../assets/img/logo.png";
import favicon from "../assets/img/favicon-32.png";
import "../assets/sass/Header.scss";

const Header = () => {
    const [categories, setCategories] = useState([]);
    const [artisans, setArtisans] = useState([]);
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const cats = await getCategories();
                const arts = await getArtisans();
                setCategories(cats || []);
                setArtisans(arts || []);
            } catch (err) {
                console.error("Erreur API:", err);
            }
        };
        loadData();
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value.length > 1) {
            const filtered = artisans.filter(a => 
                a.nom.toLowerCase().includes(value.toLowerCase()) ||
                a.nom_specialite.toLowerCase().includes(value.toLowerCase()) ||
                a.ville.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filtered.slice(0, 5));
        } else {
            setSuggestions([]);
        }
    };

    return (
        <Navbar expand="lg" className="main-header shadow-sm bg-white">
            <Container>
                {/* LOGO */}
                <Navbar.Brand as={Link} to="/">
                    <picture className="header-logo-container">
                        {/* Si l'écran est inférieur à 768px, on affiche le favicon */}
                        <source srcSet={favicon} media="(max-width: 767px)" />
                        {/* Par défaut (ordinateur et tablette), on affiche le grand logo */}
                        <img src={Logo} alt="Logo" className="header-logo" />
                    </picture>
                </Navbar.Brand>

                {/* BOUTON BURGER (Mobile) */}
                <Navbar.Toggle aria-controls="main-navbar-nav" />

                {/* CONTENU REPLIABLE */}
                <Navbar.Collapse id="main-navbar-nav">
                    <Nav className="mx-auto">
                        {categories.map(cat => (
                            <Nav.Link 
                                key={cat.id_categorie} 
                                as={Link} 
                                to={`/categories/${cat.id_categorie}`}
                                className="custom-link"
                            >
                                {cat.nom_categorie}
                            </Nav.Link>
                        ))}
                    </Nav>

                    <div className="search-wrapper mt-3 mt-lg-0">
                        <Form.Control
                            type="search"
                            placeholder="Trouver un artisan..."
                            className="search-input"
                            value={query}
                            onChange={handleSearch}
                        />
                        
                        {suggestions.length > 0 && (
                            <div className="suggestion-box shadow">
                                {suggestions.map(artisan => (
                                    <Link 
                                        key={artisan.id_artisan} 
                                        to={`/artisan/${artisan.id_artisan}`}
                                        className="suggestion-item"
                                        onClick={() => { setSuggestions([]); setQuery(""); }}
                                    >
                                        <div className="info">
                                            <span className="name">{artisan.nom}</span>
                                            <span className="details">{artisan.nom_specialite} • {artisan.ville}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;