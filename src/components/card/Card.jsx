import "./card.css"

const Card = ( {user, newCard} ) => {

  console.log(newCard.vendor);
  let firstName = user.first.toUpperCase();
  let lastName = user.last.toUpperCase();

return(
    <>
     
    < div className="wallet">
    
   
        <div className="card">
             <p className="card-vendor">{newCard.vendor}</p>
             <p className="card-number">{newCard.cardNumber}</p>
             <span className="card-info">
             <p className="card-name"> <span className="name-valid">CARDHOLDER'S NAME</span> {firstName + " " + lastName}</p>
             <p className="card-valid"><span className="name-valid">VALID</span> {newCard.expireMonth} / {newCard.expireYear} </p>
             </span>
             </div>
        
        
    </div>
    </>
)
}



export default Card;