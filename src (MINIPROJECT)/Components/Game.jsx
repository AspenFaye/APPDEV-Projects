import { useLocation } from "react-router-dom";

const reviews = {
  1:[
    { id:1, reviewerName: "Slayer3000", rating: '★ ★ ★ ★', comment: "Great game, really enjoyed the gameplay!" },
    { id:2, reviewerName: "NoobMaster69", rating: '★ ★ ★ ★ ★', comment: "Amazing graphics and story, highly recommend." },
    { id:3, reviewerName: "AnonStar08", rating: '★ ★ ★', comment: "Good, but could use some improvements." },
    { id:4, reviewerName: "Girthatron77", rating: '★ ★ ★ ★', comment: "Fun experience overall, but a bit repetitive." },
    { id:5, reviewerName: "WhatTheSigma", rating: '★ ★ ★ ★ ★', comment: "One of the best games I've played this year!" },
  ],
  2:[
    { id:1, reviewerName: "GobbleMaster", rating: '★ ★ ★ ★', comment: "PEAK" },
    { id:2, reviewerName: "GawkGawk", rating: '★ ★ ★ ★ ★', comment: "GOAT" },
    { id:3, reviewerName: "HawkTuah", rating: '★ ★ ★', comment: "AMAZINGGGGGGGG OMGSSSSSS" },
    { id:4, reviewerName: "Yoshi21", rating: '★ ★ ★ ★', comment: "🐐🐐🐐🐐🐐🐐🐐🐐🐐🐐🐐🐐🐐" },
    { id:5, reviewerName: "Skibidi", rating: '★ ★ ★ ★ ★', comment: "Sorrowful be the heart, penitent one" },
  ],
  3:[
    { id:1, reviewerName: "StreamTTPD", rating: '★ ★ ★ ★', comment: "WHAT THE SIGMA?!" },
    { id:2, reviewerName: "冰淇淋", rating: '★ ★ ★ ★ ★', comment: "the more dead the more cells." },
    { id:3, reviewerName: "招商好", rating: '★ ★ ★', comment: "中国现在" },
    { id:4, reviewerName: "中国现在", rating: '★ ★ ★ ★', comment: "I'm gonna dead your cells" },
    { id:5, reviewerName: "我有", rating: '★ ★ ★ ★ ★', comment: "It's deading time" },
  ],
  4:[
    { id:1, reviewerName: "冰淇淋", rating: '★ ★ ★ ★', comment: "Deceivingly adorable." },
    { id:2, reviewerName: "GobThrottle", rating: '★ ★ ★ ★ ★', comment: "I LIKE INSECTS" },
    { id:3, reviewerName: "DarkWarlock4", rating: '★ ★ ★', comment: "meh" },
    { id:4, reviewerName: "Bartholomew", rating: '★ ★ ★ ★', comment: "Modern Masterpiece" },
    { id:5, reviewerName: "Ezekiel", rating: '★ ★ ★ ★ ★', comment: "This Goes Hard" },
  ],
  5:[
    { id:1, reviewerName: "Judas", rating: '★ ★ ★ ★', comment: "literally dark, I can't see anything" },
    { id:2, reviewerName: "Yorik", rating: '★ ★ ★ ★ ★', comment: "I HUNGER FOR BONE POWDER" },
    { id:3, reviewerName: "Wonyoung", rating: '★ ★ ★', comment: "The sculptor had no business beating me up like that." },
    { id:4, reviewerName: "Karina", rating: '★ ★ ★ ★', comment: "I want Imra to step on me" },
    { id:5, reviewerName: "JENNIE", rating: '★ ★ ★ ★ ★', comment: "Yadwiga... mommy? sorry mommy? sorry mommy? sorry mommy? sorry" },
  ],
}

export default function Game() {
    const location = useLocation();
    const game = location.state.game;

    return (
        <div className="game-detail">
            <div className="game-image-container">
                <img src={game.image} alt={game.name} className="game-image" />
            </div>
            <h1>{game.name}</h1>
            <p className="game-description">{game.description}</p>
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
