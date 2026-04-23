import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ImgError from '../assets/img/404Img.jpg';
import "../assets/sass/Page404.scss";

const Page404 = () => {
    return (
        <div className="page-404">
            
            <Helmet>
                <title>Page non trouvée | Mon Site</title>
                <meta name="description" content="Désolé, la page que vous recherchez n'existe pas ou a été déplacée." />
                <meta name="robots" content="noindex" /> 
            </Helmet>

            {/* --- CONTENU VISUEL --- */}
            <img 
                src={ImgError} 
                alt="Illustration erreur 404" 
                style={{ maxWidth: '400px', marginBottom: '20px' }} 
            />
            
            <h1>Oups ! Page non trouvée</h1>
            <p>La page que vous avez demandée n'est plus disponible.</p>
            
            <Link to="/" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
                Retourner à l'accueil
            </Link>
        </div>
    );
};

export default Page404;