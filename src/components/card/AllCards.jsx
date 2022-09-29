import "./card.css"
import { deleteCard, changeActiveCard } from "../user/UserSlice";
import { useDispatch } from "react-redux";

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

return(
    <>

      {cardInfo.activated ? <div className="active-card"> 
             <p className="card-vendor">{cardInfo.vendor}</p>
             <p className="card-number">{cardInfo.cardNumber}</p>
             <span className="card-info">
             <p className="card-name"> <span className="name-valid">CARDHOLDER'S NAME</span> {firstName + " " + lastName}</p>
             <p className="card-valid"><span className="name-valid">VALID</span> {cardInfo.expireMonth} / {cardInfo.expireYear} </p>
             </span>
             </div>
             :
             <div className="card" onClick={handleActivate}> 
             <p className="card-vendor">{cardInfo.vendor}</p>
             <p className="card-number">{cardInfo.cardNumber}</p>
             <span className="card-info">
             <p className="card-name"> <span className="name-valid">CARDHOLDER'S NAME</span> {firstName + " " + lastName}</p>
             <p className="card-valid"><span className="name-valid">VALID</span> {cardInfo.expireMonth} / {cardInfo.expireYear} </p>
             </span>
             
             <button onClick={handleDelete}>Delete Card</button>
             </div>
              }

    </>
)
}

export default AllCards;