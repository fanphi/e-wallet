import "./card.css"
import { RiVisaLine } from "react-icons/ri"
import { RiMastercardFill } from "react-icons/ri"
import { GrAmex } from "react-icons/gr"
import contactless from "../../assets/contactless.png"
import chip from "../../assets/chip.png"

const Card = ( {user, newCard} ) => {

  console.log(newCard.vendor);
  let firstName = user.first.toUpperCase();
  let lastName = user.last.toUpperCase();
  let cardClass = "card";

return(
    <>
     
    < div className="wallet">
    
   
        <div className={cardClass + " " + newCard.vendor}>
            
             {newCard?.vendor === "MASTERCARD" ? (
               < RiMastercardFill className="vendor-logo" />
              ) : newCard?.vendor === "VISA" ? (
                < RiVisaLine className="vendor-logo"/>
              ) : newCard?.vendor === "AMEX" ? (
                < GrAmex className="vendor-logo"/>
              ) : null}
              
              <span className="chip-container">
               <img src={chip} alt="contactless-logo" className="chip-logo"/>
              <img src={contactless} alt="contactless-logo" className="contactless-logo"/>
              </span>
             <p className="card-number">{newCard.cardNumber}</p>
             <span className="card-info">
             <p className="card-name"> <span className="name-valid">CARDHOLDER'S NAME</span> {firstName + " " + lastName}</p>
             <p className="card-valid"><span className="name-valid">VALID THRU</span> {newCard.expireMonth}/{newCard.expireYear} </p>
             </span>
             </div>
        
        
    </div>
    </>
)
}

export default Card;