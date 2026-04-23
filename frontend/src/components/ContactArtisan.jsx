import { Form, Button, FloatingLabel, Container, Row, Col } from 'react-bootstrap';
import "../assets/sass/ContactArtisan.scss";

const ContactArtisan = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message envoyé !"); 
    };

    return (
        <Container className="contact-container py-5">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <div className="contact-card shadow-sm p-4 p-md-5">
                        <h2 className="text-center mb-4">Contacter l'artisan</h2>
                        
                        <Form onSubmit={handleSubmit}>
                            <FloatingLabel controlId="floatingName" label="Votre nom" className="mb-3">
                                <Form.Control type="text" placeholder="Votre nom" required />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingEmail" label="Adresse mail" className="mb-3">
                                <Form.Control type="email" placeholder="name@example.com" required />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingSubject" label="Objet de votre demande" className="mb-3">
                                <Form.Control type="text" placeholder="Objet" required />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingTextarea" label="Votre message" className="mb-4">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Décrivez votre demande..."
                                    style={{ height: '150px' }}
                                    required
                                />
                            </FloatingLabel>

                            <div className="d-grid">
                                <Button variant="primary" type="submit" className="btn-submit py-2">
                                    Envoyer le message
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactArtisan;