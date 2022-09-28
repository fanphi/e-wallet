// import { useSelector } from "react-redux";
// import { addCard } from "../user/UserSlice";
// const NewCard = (props) => {
//     let handleSubmit = () => {
//         let vendor = document.querySelector("#vendor").value;
//         let cardNumber = document.querySelector("#cardNumber").value;
//         let expireMonth = document.querySelector("#expireMonth").value;
//         let expireYear = document.querySelector("#expireYear").value;
//         let ccv = document.querySelector("#ccv").value;
    
//         props.newCard(vendor,cardNumber, expireMonth, expireYear, ccv);
        
//     }
//       return (
//         <div >
//             <form action="">
//             <label htmlFor="vendor">VENDOR: </label>
//             <select id="vendor">
//                 <option value="VISA">VISA</option>
//                 <option value="MASTERCARD">MASTERCARD</option>
//                 <option value="AMERICAN EXPRESS">AMERICAN EXPRESS</option>
//                 </select>
//             <br />
    
//             <label htmlFor="cardNumber">CARD NUMBER: </label>
//             <input type="text" id="cardNumber" />
//             <br/>
//             <label htmlFor="expireMonth">EXPIRATION MONTH: </label>
//             <input type="number" id="expireMonth" />
//             <br/>
//             <label htmlFor="expireYear">EXPIRATION YEAR: </label>
//             <input type="number" id="expireYear" />
//             <br/>
//             <label htmlFor="ccv">CCV: </label>
//             <input type="number" id="ccv" />
//             <br/>
//             <label htmlFor="name">NAME: </label>
//             <input type="text" id="name" />
//             <br/>
//             <button onClick={handleSubmit}>Add new card</button>
//             </form>
//         </div>
//       )
    
// }

// export default NewCard;

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
            console.log("test")
        if (cardLength >= 4){
        alert("You have added the maximum number of cards")
    }
    else{
        const addedCard = {...newCard, activated: false}
        // console.log(addedCard)
        dispatch(addCard(addedCard));
    }
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    
    //     // if (maxCards) {
    // //   alert("You have reached the maximum limit for cards")
    // //     } else {
    //         dispatch(addCard(newCard));
    //         setNewCard(myNewCard);
    //       console.log("test");
    //     // }
    //   };

    
 
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