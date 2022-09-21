import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

const cardImages = [
  { src: "/img/gold.jpg", matched: false },
  { src: "/img/green-blue.jpg", matched: false },
  { src: "/img/light-blue.jpg", matched: false },
  { src: "/img/pink.jpeg", matched: false },
  { src: "/img/purple.jpg", matched: false },
  { src: "/img/red.jpg", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => { // compare two selected cards; useEffect fires when the component first mounts and then again when dependency changes
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards((previousCards) => {
          return previousCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((previousTurns) => previousTurns + 1);
    setDisabled(false)
  };

  useEffect(() => { // to automatically start game when component first loads
    shuffleCards() // function that technically starts the game
  }, [])

  return (
    <div className="App">
      <h1>React Crystal Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.matched} disabled={disabled} />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
