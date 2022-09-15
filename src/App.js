import { useState } from "react";
import "./App.css";

const cardImages = [
  { src: "/img/gold.jpg" },
  { src: "/img/green-blue.jpg" },
  { src: "/img/light-blue.jpg" },
  { src: "/img/pink.jpeg" },
  { src: "/img/purple.jpg" },
  { src: "/img/red.jpg" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0)
  };

  // console.log(cards, turns)

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map(card => (
          <div className="individual-card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="front of card" />
              <img className="back" src="/img/cover.jpg" alt="back of card" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
