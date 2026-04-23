import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import NoteImg from '../components/NoteImg';
import "../assets/sass/ListArtisan.scss";

const Category = () => {
    const { id } = useParams();
    const [artisans, setArtisans] = useState([]);

    useEffect(() => {
        if (!id) return;

        fetch(`http://localhost:3000/api/artisans/category/${id}`)
            .then(res => res.json())
            .then(data => setArtisans(data))
            .catch(err => console.error("Erreur Category:", err));
    }, [id]);
    
    return (
        <Container className="category-page py-5">
            <h2 className="category-title mb-5">
                {artisans.length > 0 ? `Artisans : ${artisans[0].nom_categorie}` : "Liste des artisans"}
            </h2>

            <Row className="g-4">
                {artisans.map(artisan => (
                    <Col key={artisan.id_artisan} xs={12} md={6} lg={4}>
                        <Link to={`/artisan/${artisan.id_artisan}`} className="artisan-card-link">
                            <Card className="h-100 shadow-sm border-0 artisan-card">
                                <Card.Body>
                                    <Card.Title className="fw-bold">{artisan.nom}</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item className="d-flex align-items-center gap-2">
                                        <NoteImg rating={artisan.note} />
                                        <span className="text-muted small">{artisan.note} / 5</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item><strong>Spécialité :</strong> {artisan.nom_specialite}</ListGroup.Item>
                                    <ListGroup.Item><strong>Ville :</strong> {artisan.ville}</ListGroup.Item>
                                </ListGroup>
                                <Card.Footer className="bg-white border-0 pb-3 text-center">
                                    <span className="btn-detail">Voir la fiche complète</span>
                                </Card.Footer>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Category;