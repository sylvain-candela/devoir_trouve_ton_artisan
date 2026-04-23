import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getArtisanById } from "../services/api";
import { Card, ListGroup, Spinner, Container } from 'react-bootstrap';
import ArtisanImg from "./ArtisanImg";
import NoteImg from "./NoteImg";
import "../assets/sass/ArtisanCard.scss";

function ArtisanCard() {
    const { id } = useParams();
    const [artisan, setArtisan] = useState(null);

    useEffect(() => {
        const loadArtisan = async () => {
            const data = await getArtisanById(id);
            const finalData = Array.isArray(data) ? data[0] : data;
            setArtisan(finalData);
        };
        if (id) loadArtisan();
    }, [id]);

    if (!artisan) return (
        <Container className="d-flex justify-content-center mt-5">
            <Spinner animation="border" variant="primary" />
        </Container>
    );

    return (
        <div className="artisan-card-container">
            <Card className="main-artisan-card shadow-sm border-0">
                <div className="artisan-header">
                    <div className="image-wrapper">
                        <ArtisanImg nomCategorie={artisan.nom_categorie} />
                    </div>
                    <Card.Body className="title-section">
                        <Card.Title as="h3" className="artisan-name">{artisan.nom}</Card.Title>
                        <div className="rating-badge">
                            <NoteImg rating={artisan.note} />
                            <span className="note-val">{artisan.note} / 5</span>
                        </div>
                    </Card.Body>
                </div>

                <ListGroup className="list-group-flush border-top-0">
                    <ListGroup.Item>
                        <span className="label">Spécialité:</span> {artisan.nom_specialite}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <span className="label">Catégorie:</span> {artisan.nom_categorie}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <span className="label">Ville:</span> {artisan.ville}
                    </ListGroup.Item>
                </ListGroup>

                <Card.Body className="action-links d-flex justify-content-around">
                    {artisan.site_web && (
                        <Card.Link href={artisan.site_web} target="_blank" rel="noopener noreferrer" className="btn-website">
                            Visiter le site
                        </Card.Link>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
}

export default ArtisanCard;