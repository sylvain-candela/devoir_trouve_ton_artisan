import TopArtisan from '../components/TopArtisan';
import { Container, Row, Col } from 'react-bootstrap';
import "../assets/sass/Home.scss";

function Home() {
    const steps = [
        { id: 1, title: "Choisir", desc: "Choisir la catégorie d'artisanat dans le menu." },
        { id: 2, title: "Sélectionner", desc: "Choisir l'artisan." },
        { id: 3, title: "Contacter", desc: "Le contacter via le formulaire de contact." },
        { id: 4, title: "Recevoir", desc: "Une réponse sera apportée sous 48h." }
    ];

    return (
        <Container className="home-container my-5">
            <section className="steps-section mb-5">
                <h2 className="section-title text-center mb-5">Comment trouver mon artisan ?</h2>
                
                <Row className="g-4">
                    {steps.map((step) => (
                        <Col key={step.id} xs={12} md={6} lg={3}>
                            <div className="step-card">
                                <div className="step-number">{step.id}</div>
                                <div className="step-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </section>

            <hr className="my-5" />

            <section className="top-artisans-section">
                <TopArtisan />
            </section>
        </Container>
    );
}
export default Home;