import { useState, useEffect } from "react";
import { getTopArtisans } from "../services/api";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import NoteImg from './NoteImg';
import "../assets/sass/TopArtisan.scss";



function TopArtisans() {

        
        const [artisans, setArtisans] = useState([]);

        useEffect(() => {
                const loadData = async () => {
                    try {
                        const arts = await getTopArtisans();
                        setArtisans(arts);
                        
                        console.log("Données reçues par React :", arts[0]);
                    } catch (err) {
                        console.error("Erreur API:", err);
                    }
                };
                loadData();
            }, []);

        return (
            <Container fluid className="mt-4">
                <h2>Artisans du mois</h2>
                <Row>
                    <Col>
                        <div className="artisan-list">
                            <div>
                                {artisans.map((arts) => (
                                    <Link to={`/artisan/${arts.id_artisan}`} key={arts.id_artisan} className="artisan-card">
                                        <Card style={{ width: '18rem' }}>
                
                                        <Card.Body>
                                            <Card.Title>{arts.nom}</Card.Title>
                                        </Card.Body>
                                        
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> 
                                                <NoteImg rating={arts.note}/>
                                                <span className="artisan-note-text">Note: {arts.note} / 5</span>
                                            </ListGroup.Item> 
                                            <ListGroup.Item>Spécialité: {arts.nom_specialite}</ListGroup.Item>
                                            <ListGroup.Item>Ville: {arts.ville}</ListGroup.Item>
                                        </ListGroup>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        )
}

export default TopArtisans;