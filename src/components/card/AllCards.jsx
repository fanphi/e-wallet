import { useState } from "react";
import "./card.css"

// import { Link } from "react-router-dom";
const AllCards = ( {user, cards} ) => {

  console.log(user);
  let firstName = user.first.toUpperCase();
  let lastName = user.last.toUpperCase();
  console.log(cards);


return(
    <>
    
   
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