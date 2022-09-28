import { Link } from "react-router-dom";
// import User from "../components/user/User";
import Card from "../components/card/Card";
import { useSelector } from "react-redux";
import AllCards from "../components/card/AllCards";

const Cards = () =>{
    const { user, cards  } = useSelector((state) => state.user);
    // console.log(user.first + user.last);
    // cards.map((card)=>{
    //     console.log(card.vendor)
    // })
return (
    <div>
        Cards
        {/* < User /> */}
        <Link to="/addcard">
           
          <button>Add Card</button>
          </Link>
         {/* {user.first && <Card user={user} cards={cards}/>} */}
         {user.first && <AllCards user={user} cards={cards}/>}
         {/* < Card /> */}
    </div>
)
}

export default Cards;