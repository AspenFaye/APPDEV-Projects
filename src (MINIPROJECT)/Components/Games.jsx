import { Link } from 'react-router-dom';
import Epomaker from '../assets/images/Epomaker_TH80_Pro.jpg';
import Keychron from '../assets/images/Keychron_V3_Max.jpg';
import LogitechMX from '../assets/images/Logitech_MX_Keys_S.png';
import Logitech from '../assets/images/Logitech_Pop_Icon_Keys.png';

const games = [
    { id: 1, name: 'Epomaker TH80 Pro', description: 'The Epomaker TH80 Pro provides the best typing experience and the most extra features—RGB, hot-swap, wireless, a knob, Windows and Mac keycaps, and programmability—for a surprisingly reasonable price.', image: `${Epomaker}`, reviews: ['Slayer3000: Great game, really enjoyed the gameplay!', 'NoobMonster44: This game is so lit!!!', 'ErinCovid(ErinCovacha_is_my_real_name): Back 4 Blood was Left 4 Dead... get it?? cuz it was left for dead? Ehe enebe', 'KarinaXWinterXOXO: Fun experience overall, but a bit repetitive.', 'StreamTTPDAlbumOfTheYear: Left 4 Dead 2 took a great first-person shooter experience and added fresh new gameplay modes, loads of murdering and surviving accessories from melee weapons to adrenaline shots, all of which continues to satiate my desires for an FPS game that I can happily and easily spend a copious amount of hours on.'] },
    { id: 2, name: 'Keychron V3 Max', description: 'An enjoyable typing experience and the most features—RGB, hot-swap, wireless, programmability, and a fun knob—for a reasonable price.', image: `${Keychron}`, reviews: ['GameStar: At first, this looks like just another Counterstrike clone. But there’s more depth and variety, despite the lack of content.', 'DK9845945: jadore ce jeux vraiment il prend tout mon temps mon argent et mon Energie je recommande', 'MOBIUS2: Valorant is the fully matured competitive tactical shooter. Every match is fun. Its truly a wonder how well crafted this game is.', 'nOKKED: Game is great on paper for what it should be. I think that balancing is a crazy issue along with their map pools. the map rotation sometimes feel a little out of touch with what the community and even top players want changed. The balancing is also horrid. Most of what the balancing gives is another horrible meta ever since 2021. Also you run into someone toxic like 1/3 of the time in comp.', 'StreamTTPDAlbumOfTheYear2: Valorant is likely to make a big impression on anybody that enjoys competitive shooters, even if it is a little light on content at the moment. Genre newcomers will need to stay patient to push past the initial difficulty curve, but its exhilarating combination of gunplay and agent abilities is accessible enough that reaping its rewards shouldn’t take too long.']  },
    { id: 3, name: 'Logitech MX Keys S', description: 'The MX Keys S offers the best typing experience of the full-size wireless keyboards we’ve tested, and it can connect via Bluetooth or USB dongle.', image: `${LogitechMX}`, reviews: ['FXYDS: As new entry and not burned out with the genre, i have to say this is a very fun to play game, excellent quality of graphics, music and story. 10 out of 10 for me. Totally worth!!', 'Aminooosh: I dont like the woke stuff they added thats all other than that its a okay game', 'Xjayrey: Higher price, less things to do, less skins to obtain, less care given, less love given. Atleast they are honest with their title:mk1 offers half of mk11', 'P4cify: A massive step back from 10 and 11 ...in almost every way. Gameplay, customisation, content. Nearly everything is worse, its actually ridiculous!?', 'StreamTTPDAlbumOfTheYear3: Mortal Kombat 1 envisions an exciting future with fluid combat, a fantastic story mode, and superb visuals - but receding features, underbaked mechanics, and a dated online experience keep it in the past.']  },
    { id: 4, name: 'Logitech Pop Icon Keys', description: 'The Pop Icon Keys is comfortable to type on, compact, and delivers long battery life. Plus, it can pair with and switch between three Bluetooth devices.', image: `${Logitech}`, reviews: ['GameShark: Free to play and addictive as hell, League of Legends delivers a really entertaining, competitive environment for RTS twitch players.', 'PCGamerXO: The most accessible, rewarding and endearing of DotAs offspring yet.', 'GRevolution: A very well-done game.', 'MutantLeader: dont bother: its not a game but sports - its not made for people who want to have fun but those who want to win - plenty of effort went into the characters looks but the gameplay is all about who can be the biggest bastard, despite being in teams there is no teamwork whatsoever its pure chaos - and it takes place always on the one single map - its a shame: with a good single player campaign and more levels it could be easily a 10/10 - you cannot beat the price', 'StreamTTPDAlbumOfTheYear4: The game itself is good and the Stories and Charcters are amazing. But the community is really toxic and the game can really hurt your mental health']  },
];

export default function Games() {
    return (
        <>
            <h1><center>Games List:</center></h1>
            <ul className="games-list">
                {games.map((game) => (
                    <li key={game.id} className="game-item">
                        <Link to={`/games/${game.id}`} state={{ game }}>
                            <img src={game.image} alt={game.name} />
                            <div className="game-title">{game.name}</div>
                        </Link>
                        <div className="game-description">{game.description}</div>
                    </li>
                ))}
            </ul>
        </>
    );
}
