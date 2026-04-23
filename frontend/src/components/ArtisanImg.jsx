import alimentation from "../assets/img/alimentation.png";
import fabrication from "../assets/img/fabrication.png";
import batiment from "../assets/img/batiment.png";
import service from "../assets/img/service.png";

function ArtisanImg({ nomCategorie }) {
    
    const categoryImg = {
        "Alimentation": alimentation,
        "Bâtiment": batiment,
        "Fabrication": fabrication,
        "Services": service
    };


    const sourceImage = categoryImg[nomCategorie] || batiment;

    return (
        <img 
            src={sourceImage} 
            alt={nomCategorie || "Artisan"} 
        />
    );
}


export default ArtisanImg;