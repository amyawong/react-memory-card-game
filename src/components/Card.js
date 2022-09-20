import "./Card.css"

export default function Card ({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card)
  }

  return (
    <div>
      <div className="individual-card">
            <div className={flipped ? "flipped" : ""}>
              <img className="front" src={card.src} alt="front of card" />
              <img className="back" src="/img/cover.jpg" onClick={handleClick} alt="back of card" />
            </div>
          </div>
    </div>
  )
}