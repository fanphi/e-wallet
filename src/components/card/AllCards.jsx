import { useState } from "react";
import "./card.css"
import NewCard from "../newCard/NewCard";
// import { Link } from "react-router-dom";
const AllCards = ( {user, cards} ) => {

  console.log(user);
  let firstName = user.first.toUpperCase();
  let lastName = user.last.toUpperCase();
  console.log(cards);
//   let startCard 
// cards.map((card)=>{
//   startCard = [
//     {
//     vendor: card.vendor,
//     cardNumber: card.cardNumber,
//     cardHolder: firstName + " " + lastName,
//     expireMonth: card.expireMonth,
//     expireYear: card.expireYear,
//     ccv: card.ccv,
//     activated: card.activated
// }
// ]
// })

// const [card, setCard] = useState(startCard);

//  let newCard = (vendor, cardNumber, expireMonth, expireYear, ccv) => {
//     let newCard = {
//       vendor,
//       cardNumber,
//       cardHolder: firstName + " " + lastName,
//       expireMonth,
//       expireYear,
//       ccv,
//       activated: false
//     }
//     setCard([...card, newCard])
//   }


return(
    <>
    
      {/* <NewCard newCard={newCard} /> */}
      {/* <Link to="/addcard" newCard={newCard}> */}
           
           {/* <button>Add Card</button>
           </Link> */}
    < div className="wallet">
    
    {cards.map((card)=> (
        <div className="card">
             <p className="card-vendor">{card.vendor}</p>
             <p className="card-number">{card.cardNumber}</p>
             <span className="card-info">
             <p className="card-name"> <span className="name-valid">CARDHOLDER'S NAME</span> {firstName + " " + lastName}</p>
             <p className="card-valid"><span className="name-valid">VALID</span> {card.expireMonth} / {card.expireYear} </p>
             </span>
             </div>
          ))}
        
    </div>
    </>
)
}



export default AllCards;