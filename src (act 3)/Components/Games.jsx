import {Link} from 'react-router-dom'
import LeagueOfLegends from '../assets/images/LeagueOfLegends.jpg'
import Left4Dead2Ehe from '../assets/images/Left4Dead2Ehe.jpg'
import MobileLegends from '../assets/images/MobileLegends.png'
import MortalKombat1 from '../assets/images/MortalKombat1.jpg'
import Valorant from '../assets/images/Valorant.jpg'

const games = [
    {id: 1, name: 'Left 4 Dead 2', description: 'Set in the zombie apocalypse, Left 4 Dead 2 (L4D2) is the highly anticipated sequel to the award-winning Left 4 Dead, the #1 co-op game of 2008.', image:`${Left4Dead2Ehe}`, reviews:["Very Good", "Satisfactory", "Okay", "Bad", "The Worst"]},
    {id: 2, name: 'Valorant', description: 'VALORANT is a free-to-play first-person tactical shooter video game being developed and published by Riot Games.', image:`${Valorant}`, reviews:["Very Good", "Satisfactory", "Okay", "Bad", "The Worst"]},
    {id: 3, name: 'Mortal Kombat 1', description: 'Mortal Kombat 1 is both the 12th fighting game and 23rd installment in the Mortal Kombat series developed by NetherRealm Studios and published by Warner Bros. Games.',image:`${MortalKombat1}`,  reviews:["Very Good", "Satisfactory", "Okay", "Bad", "The Worst"]},
    {id: 4, name: 'League of Legends', description: 'League of Legends is a multiplayer online battle arena (MOBA) game in which the player controls a character ("champion") with a set of unique abilities from an isometric perspective.', image:`${LeagueOfLegends}`, reviews:["Very Good", "Satisfactory", "Okay", "Bad", "The Worst"]},
    {id: 5, name: 'Mobile Legends: Bang Bang', description: 'Mobile Legends: Bang Bang is a multiplayer online battle arena (MOBA) game designed for mobile phones.', image:`${MobileLegends}`, reviews:["Very Good", "Satisfactory", "Okay", "Bad", "The Worst"]},
]
export default function Games (){
    return(
        <>
            <h1>Games List: </h1>
            <ul>
                {games.map((game)=> (
                    <li key = {game.id}>
                        <Link to = 
                        {`/games/${game.id}`} state = {{game}}>
                            <img src={game.image} alt="gameimage" />
                        <strong>{game.name}</strong>
                        </Link> 
                         - {game.description}
                         </li>
                ))}
            </ul>
        </>
    )
}