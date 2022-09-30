import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AllCards from "../components/card/AllCards";

const Cards = () =>{
    const { user, cards  } = useSelector((state) => state.user);
  
return (
    <main>
       
            <div className="wallet">
         {user.first && cards?.map((card, i) => {
        
          return <AllCards key={i} cardInfo={card} user={user} />
        })}
        </div>

        <Link to="/addcard">
           
           <button className="btn">ADD A NEW CARD</button>
           </Link>

    </main>
)
}

export default Cards;