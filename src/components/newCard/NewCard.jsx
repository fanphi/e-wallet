const NewCard = (props) => {
    let handleSubmit = () => {
        let vendor = document.querySelector("#vendor").value;
        let cardNumber = document.querySelector("#cardNumber").value;
        let expireMonth = document.querySelector("#expireMonth").value;
        let expireYear = document.querySelector("#expireYear").value;
        let ccv = document.querySelector("#ccv").value;
    
        props.newCard(vendor,cardNumber, expireMonth, expireYear, ccv);
    }
      return (
        <div style={{padding:"40px"}}>
            <label htmlFor="vendor">VENDOR: </label>
            <select id="vendor">
                <option value="VISA">VISA</option>
                <option value="MASTER CARD">MASTER CARD</option>
                <option value="AMERICAN EXPRESS">AMERICAN EXPRESS</option>
                </select>
            <br />
    
            <label htmlFor="cardNumber">CARD NUMBER: </label>
            <input type="number" id="cardNumber" maxLength="12" minLength="12"/>
            <br/>
            <label htmlFor="expireMonth">EXPIRATION MONTH: </label>
            <input type="number" id="expireMonth"/>
            <br/>
            <label htmlFor="expireYear">EXPIRATION YEAR: </label>
            <input type="number" id="expireYear"/>
            <br/>
            <label htmlFor="ccv">CCV: </label>
            <input type="number" id="ccv"/>
            <br/>
            <label htmlFor="name">NAME: </label>
            <input type="text" id="name"/>
            <br/>
            <button onClick={handleSubmit}>Add new card</button>
        </div>
      )
    
}

export default NewCard;