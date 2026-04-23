import star from "../assets/img/star.png";
import star_empty from "../assets/img/star_empty.png";

const NoteImg = ({ rating }) => {
    const maxStar = 5;
    const roundedRating = Math.round(rating || 0);

    return (
        <div>
            {[...Array(maxStar)].map((_, index) => (
                <img
                    key={index}
                    src={index < roundedRating ? star : star_empty}
                    alt={index < roundedRating ? "étoile pleine" : "étoile vide"}
                    style={{ width: '20px' }}
                />
            ))}
        </div>
    );
};

export default NoteImg;