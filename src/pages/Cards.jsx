import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AllCards from "../components/card/AllCards";

const Cards = () =>{
    const { user, cards  } = useSelector((state) => state.user);
  
return (
    <div>
        Cards

        <Link to="/addcard">
           
          <button>Add Card</button>
          </Link>
       
            <div className="wallet">
         {user.first && cards?.map((card, i) => {
        
          return <AllCards key={i} cardInfo={card} user={user} />
        })}
        </div>
    </div>
)
}

export default Cards;