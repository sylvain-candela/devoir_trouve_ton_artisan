import { useState, useEffect } from "react";
import { getArtisansByCategory} from "../services/api";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'; 



function ListArtisans() {

        const [artisans, setArtisans] = useState([]);

        useEffect(() => {
            const loadData = async () => {
                try {
                    const arts = await getArtisansByCategory();
                    setArtisans(arts || []);

                } catch (err) {
                    console.error("Erreur API:", err);
                }
            };
            loadData();
        }, []);
        

        return (
            <div>
                <h2>Liste des Artisans</h2>
                <div className="artisan-list">
                    {artisans.map((arts, index) => (
                        <div key={arts.id ? `artisan-${arts.id}` : `index-${index}`} className="artisan-card">
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{arts.nom}</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Note: {arts.note}</ListGroup.Item>
                                    <ListGroup.Item>Spécialité: {arts.nom_specialite}</ListGroup.Item>
                                    <ListGroup.Item>Ville: {arts.ville}</ListGroup.Item>
                                </ListGroup>
                        </Card>
                        </div>
                    ))}
                </div>
            </div>
        )
}

export default ListArtisans;