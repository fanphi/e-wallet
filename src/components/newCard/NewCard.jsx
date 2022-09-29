import { useSelector, useDispatch } from "react-redux";
import { addCard } from "../user/UserSlice";

const NewCard = ({user, newCard, setNewCard}) => {
    
    const dispatch = useDispatch();
    const cardLength =  useSelector((state) => state.user)?.cards.length;
    console.log(cardLength)
    console.log(newCard)

    let cardHolderName = user.first.toUpperCase() + " " + user.last.toUpperCase();

    let handleOnChange = (e) => {
    
        setNewCard((previous)=>({
            ...previous,
            [e.target.id]: e.target.value
         }))  
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        if (cardLength >= 4){
        alert("You have added the maximum number of cards")
    }
    else{
        const addedCard = {...newCard, activated: false}
    
        dispatch(addCard(addedCard));
        alert("Your card has been added to your e-wallet, please delete one card!")
    }
    }
 
      return (
        <div >
            <form onSubmit={handleSubmit}>

            <label htmlFor="vendor">VENDOR: </label>
            <select id="vendor" name="vendor" onChange={(e) => handleOnChange(e)} required>
                <option value="VISA">VISA</option>
                <option value="MASTERCARD">MASTERCARD</option>
                <option value="AMERICAN EXPRESS">AMERICAN EXPRESS</option>
                </select>
            <br />
    
            <label htmlFor="cardNumber">CARD NUMBER: </label>
            <input type="number" id="cardNumber" name="cardNumber" placeholder="1234 5678 9101 2345" onChange={(e) => handleOnChange(e)} min="1000000000000000" max="9999999999999999" required/>
            <br/>

            <label htmlFor="expireMonth">EXPIRATION MONTH: </label>
            <input type="number" id="expireMonth" name="expireMonth" placeholder="MM" onChange={(e) => handleOnChange(e)} min="1" max="12" required/>
            <br/>

            <label htmlFor="expireYear">EXPIRATION YEAR: </label>
            <input type="number" id="expireYear" name="expireYear" placeholder="YY" onChange={(e) => handleOnChange(e)} min="22" max="99"required/>
            <br/>

            <label htmlFor="ccv">CCV: </label>
            <input type="number" id="ccv" name="ccv" placeholder="123" onChange={(e) => handleOnChange(e)} min="100" max="999" required/>
            <br/>

            <label htmlFor="name">NAME: </label>
            <input type="text" id="name" name="name" value={cardHolderName} disabled/>
            <br/>

            <button onClick={handleSubmit}>Add new card</button>
            </form>
        </div>
      )
    
}

export default NewCard;