import { useState } from "react";
import "./card.css"
import NewCard from "../newCard/NewCard";
// import { Link } from "react-router-dom";
const Card = ( {user} ) => {
  console.log(user);
  let firstName = user.first.toUpperCase();
  let lastName = user.last.toUpperCase();


let cards = [
    {
    vendor: "Visa",
    cardNumber: "1234567891011213",
    cardHolder: firstName + " " + lastName,
    expireMonth: "11",
    expireYear: "25",
    ccv: "123",
    activated: true
}
]

const [card, setCard] = useState(cards);

 let newCard = (vendor, cardNumber, expireMonth, expireYear, ccv) => {
    let newCard = {
      vendor,
      cardNumber,
      cardHolder: firstName + " " + lastName,
      expireMonth,
      expireYear,
      ccv,
      activated: false
    }
    setCard([...card, newCard])
  }


return(
    <>
    
      <NewCard newCard={newCard} />
      {/* <Link to="/addcard" newCard={newCard}> */}
           
           {/* <button>Add Card</button>
           </Link> */}
    < div className="wallet">
    
    {card.map((card)=> (
        <div className="card">
             <p className="card-vendor">{card.vendor}</p>
             <p className="card-number">{card.cardNumber}</p>
             <span className="card-info">
             <p className="card-name"> <span className="name-valid">CARDHOLDER'S NAME</span> {card.cardHolder}</p>
             <p className="card-valid"><span className="name-valid">VALID</span> {card.expireMonth} / {card.expireYear} </p>
             </span>
             </div>
          ))}
        
    </div>
    </>
)
}



export default Card;