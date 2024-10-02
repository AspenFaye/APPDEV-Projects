import React, { useState } from 'react';

export default function QuoteGenerator ()  {
    const [quote, setQuote] = useState(0)
    const quotes = [
        "1) It is not death that a man should fear, but he should fear never beginning to live.",
        "2) The wise man is not swayed by flattery or praise.",
        "3) If I lack awareness, then why should I care what happens to me when I am dead?",
        "4) Follow where reason leads.",
        "5) Ignorant men differ from beasts only in their figure. ",
        "6) Cease to hope, and you will cease to fear.",
    ]

    const incrementQuote = () => {
        setQuote(prevQuote => (prevQuote + 1) % quotes.length)
    }

    const generateRandomQuote = () => {
        let newQuote;
        do {
            newQuote = Math.floor(Math.random() * quotes.length);
        } while (newQuote === quote);
        setQuote(newQuote);
    }
    

    const currentQuote = quotes[quote]

    return (
        <>
        <div className="container">
            <p className="counter-container">
            <h1>Random Quote:</h1>     
            {currentQuote}
            </p>
            &nbsp;
            <button className="btn btn-hero" onClick={incrementQuote}>Incremental</button>
            <button className="btn btn-hero" onClick={generateRandomQuote}>Randomize</button>
        </div>
        </>
    )
}

