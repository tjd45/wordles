import React from "react";
import Grid from './Grid';
import Thumb from './Thumb';

function Wordle(name, link) {
    this.name = name;
    this.link = link;
}
const links = [
    new Wordle("Wordle", "https://www.nytimes.com/games/wordle/index.html"),
    new Wordle("German", "https://6mal5.com"),
    new Wordle("Chessle", "https://jackli.gg/chessle/"),
    new Wordle("Worldle", "https://worldle.teuteuf.fr"),
    new Wordle("Quordle", "https://www.quordle.com/#/")
]

const Home = () => {
    return (
        <Grid>
            {links.map(wordle => (
                <Thumb key={wordle.name} wordle={wordle} />
            ))}
        </Grid>
    )
}

export default Home;