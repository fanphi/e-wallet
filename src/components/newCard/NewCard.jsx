import { useSelector, useDispatch } from "react-redux";
import { addCard } from "../user/UserSlice";
import { useNavigate } from "react-router";

const NewCard = ({ user, newCard, setNewCard }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cardLength = useSelector((state) => state.user)?.cards.length;
  const date = new Date();

  const year = date.getFullYear();
  const minYear = year.toString().slice(-2);

  let cardHolderName = user.first.toUpperCase() + " " + user.last.toUpperCase();

  let handleOnChange = (e) => {
    setNewCard((previous) => ({
      ...previous,
      [e.target.id]: e.target.value,
    }));
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (cardLength >= 4) {
      alert(
        "You have added the maximum number of cards, please delete a card!"
      );
    } else {
      const addedCard = { ...newCard, activated: false };

      dispatch(addCard(addedCard));
      alert("Your card has been added to your e-wallet!");
      navigate("/");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="vendor">VENDOR: </label>
        <br></br>
        <select
          id="vendor"
          name="vendor"
          onChange={(e) => handleOnChange(e)}
          required
        >
          <option value="VISA">VISA</option>
          <option value="MASTERCARD">MASTERCARD</option>
          <option value="AMEX">AMERICAN EXPRESS</option>
        </select>
        <br />

        <label htmlFor="cardNumber">CARD NUMBER: </label>
        <br></br>
        <input
          type="number"
          id="cardNumber"
          name="cardNumber"
          placeholder="1234 5678 9101 2345"
          onChange={(e) => handleOnChange(e)}
          min="1000000000000000"
          max="9999999999999999"
          required
        />
        <br />

        <label htmlFor="expireMonth">EXPIRATION MONTH: </label>
        <br></br>
        <input
          type="number"
          id="expireMonth"
          name="expireMonth"
          placeholder="MM"
          onChange={(e) => handleOnChange(e)}
          min="1"
          max="12"
          required
        />
        <br />

        <label htmlFor="expireYear">EXPIRATION YEAR: </label>
        <br></br>
        <input
          type="number"
          id="expireYear"
          name="expireYear"
          placeholder="YY"
          onChange={(e) => handleOnChange(e)}
          min={minYear}
          max="99"
          required
        />
        <br />

        <label htmlFor="ccv">CCV: </label>
        <br></br>
        <input
          type="number"
          id="ccv"
          name="ccv"
          placeholder="123"
          onChange={(e) => handleOnChange(e)}
          min="111"
          max="999"
          required
        />
        <br />

        <label htmlFor="name">NAME: </label>
        <br></br>
        <input
          type="text"
          id="name"
          name="name"
          value={cardHolderName}
          disabled
        />
        <br />

        <button className="btn">ADD A NEW CARD</button>
      </form>
    </div>
  );
};

export default NewCard;
