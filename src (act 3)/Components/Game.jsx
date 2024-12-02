import { useLocation } from "react-router-dom";

export default function Game() {
    const location = useLocation();
    const game = location.state.game;

    return (
        <div className="game-detail">
            <h1>{game.name}</h1>
            <p>{game.description}</p>
            <div className="game-reviews">
                <h4>Reviews:</h4>
                <ul>
                    {game.reviews.map((review, index) => (
                        <li key={index}>{review}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
