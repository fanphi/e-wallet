import { Link } from "react-router-dom";
import NewCard from "../components/newCard/NewCard";
import Card from "../components/card/Card";
import { useSelector } from "react-redux";
import { useState } from "react";

const AddCard = () => {
   
    const { user, cards  } = useSelector((state) => state.user);

    let myNewCard =     {
        vendor: "VISA",
        cardNumber: "****************",
        expireMonth: "MM",
        expireYear: "YY",
        ccv: "123",
        activated: false
        
    }
    const [newCard, setNewCard] = useState(myNewCard);
    console.log(cards)
   
return (
     <div>
         <Link to="/">
           <button>Start</button>
           </Link>
          

        Add Card
     
         {user.first && <Card user={user} newCard={newCard}/>}
         {user.first && <NewCard user={user} newCard={newCard} setNewCard={setNewCard}/>}
    </div>
)
}

export default AddCard;