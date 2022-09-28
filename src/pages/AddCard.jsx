import { Link } from "react-router-dom";
import NewCard from "../components/newCard/NewCard";
// import Card from "../components/card/Card";

const AddCard = () => {
return (
     <div>
         <Link to="/">
           <button>Start</button>
           </Link>
          

        Add Card
        < NewCard />
        {/* < Card /> */}
    </div>
)
}

export default AddCard;