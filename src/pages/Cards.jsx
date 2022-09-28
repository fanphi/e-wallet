import { Link } from "react-router-dom";
// import User from "../components/user/User";

const Cards = () =>{
return (
    <div>
        Cards
        {/* < User /> */}
        <Link to="/addcard">
           
          <button>Add Card</button>
          </Link>
    </div>
)
}

export default Cards;