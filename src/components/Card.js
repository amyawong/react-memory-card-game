import "./Card.css"

export default function Card ({ card }) {
  return (
    <div>
      <div className="individual-card">
            <div>
              <img className="front" src={card.src} alt="front of card" />
              <img className="back" src="/img/cover.jpg" alt="back of card" />
            </div>
          </div>
    </div>
  )
}