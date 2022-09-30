import "./card.css"
import { deleteCard, changeActiveCard } from "../user/UserSlice";
import { useDispatch } from "react-redux";
import { RiVisaLine } from "react-icons/ri"
import { RiMastercardFill } from "react-icons/ri"
import { GrAmex } from "react-icons/gr"
import contactless from "../../assets/contactless.png"
import chip from "../../assets/chip.png"

const AllCards = ( {user, cardInfo} ) => {
 const dispatch = useDispatch();

    console.log(cardInfo.activated)

 const handleDelete = () => {
  dispatch(deleteCard(cardInfo))
 }
const handleActivate = () => {
  dispatch(changeActiveCard(cardInfo))
}

  console.log(user);
  let firstName = user.first.toUpperCase();
  let lastName = user.last.toUpperCase();

  let activeCardClass = "active-card"
  let cardClass = "card"

return(
    <>

      {cardInfo.activated ?<div className="active">
        <h3>ACTIVE CARD</h3>
        <div className={activeCardClass + " " + cardInfo.vendor}> 
      {cardInfo?.vendor === "MASTERCARD" ? (
               < RiMastercardFill className="vendor-logo" />
              ) : cardInfo?.vendor === "VISA" ? (
                < RiVisaLine className="vendor-logo"/>
              ) : cardInfo?.vendor === "AMEX" ? (
                < GrAmex className="vendor-logo"/>
              ) : null}
              <span className="chip-container">
               <img src={chip} alt="contactless-logo" className="chip-logo"/>
              <img src={contactless} alt="contactless-logo" className="contactless-logo"/>
              </span>
             <p className="card-number">{cardInfo.cardNumber}</p>
             <span className="card-info">
             <p className="card-name"> <span className="name-valid">CARDHOLDER'S NAME</span> {firstName + " " + lastName}</p>
             <p className="card-valid"><span className="name-valid">VALID THRU</span> {cardInfo.expireMonth}/{cardInfo.expireYear} </p>
             </span>
             </div>
             </div>
             :
             <div className="inactive">
             <div className={cardClass + " " + cardInfo.vendor} onClick={handleActivate}> 
             
             {cardInfo?.vendor === "MASTERCARD" ? (
               < RiMastercardFill className="vendor-logo" />
              ) : cardInfo?.vendor === "VISA" ? (
                < RiVisaLine className="vendor-logo"/>
              ) : cardInfo?.vendor === "AMEX" ? (
                < GrAmex className="vendor-logo"/>
              ) : null}
                <span className="chip-container">
               <img src={chip} alt="contactless-logo" className="chip-logo"/>
              <img src={contactless} alt="contactless-logo" className="contactless-logo"/>
              </span>
             <p className="card-number">{cardInfo.cardNumber}</p>
             <span className="card-info">
             <p className="card-name"> <span className="name-valid">CARDHOLDER'S NAME</span> {firstName + " " + lastName}</p>
             <p className="card-valid"><span className="name-valid">VALID THRU</span> {cardInfo.expireMonth}/{cardInfo.expireYear} </p>
             </span>
             </div>
             <button className="delete-btn" onClick={handleDelete}>DELETE CARD</button>
             </div>
              }

    </>
)
}

export default AllCards;