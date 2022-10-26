import { Link } from "react-router-dom";
import NewCard from "../components/newCard/NewCard";
import Card from "../components/card/Card";
import { useSelector } from "react-redux";
import { useState } from "react";

const AddCard = () => {
  const { user } = useSelector((state) => state.user);

  let myNewCard = {
    id: Math.random(),
    vendor: "VISA",
    cardNumber: "****************",
    expireMonth: "MM",
    expireYear: "YY",
    ccv: "123",
    activated: false,
  };
  const [newCard, setNewCard] = useState(myNewCard);

  return (
    <main>
      <h2>ADD A CARD</h2>

      {user.first && <Card user={user} newCard={newCard} />}
      {user.first && (
        <NewCard user={user} newCard={newCard} setNewCard={setNewCard} />
      )}
      <Link to="/">
        <button className="btn">GO TO MY E-WALLET</button>
      </Link>
    </main>
  );
};

export default AddCard;
