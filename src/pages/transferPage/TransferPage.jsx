//Components
import Button from "../../components/UI/buttons/Button";
import BlockInput from "../../components/blockInput/BlockInput";
import Modal from "../../components/modal/Modal";

//Global
import { useState } from "react";
import axios from "axios";

//Styles
import "./transferPage.css";

function TransferPage() {
  const [fromCurrency, setFromCurrency] = useState(""),
    [toCurrency, setToCurrency] = useState("");

  const [optionFrom, setOptionFrom] = useState("Currency..."),
    [optionTo, setOptionTo] = useState("Currency...");

  const [modal, setModal] = useState(false);

  const [disabled, setDisabled] = useState(false);

  let modalClassName = "modal",
    modalContentClassName = "modal-content";

  if (!modal) {
    modalClassName += " modal-hidden";
    modalContentClassName += " modal-content-hidden";
  } else {
    modalClassName += " modal-opened";
    modalContentClassName += " modal-content-opened";
  }

  async function fetchCurrencies(url) {
    try {
      const response = await axios.get(url);

      const currValue = +fromCurrency / response.data.rates[optionFrom],
        result = currValue * response.data.rates[optionTo];

      if (
        fromCurrency &&
        optionFrom !== "Currency..." &&
        optionTo !== "Currency..."
      ) {
        setToCurrency(result % 1 === 0 ? result : result.toFixed(5));
      }
    } catch (e) {
      console.log(e);
    }
  }

  function changeModalStatus() {
    if (
      !fromCurrency ||
      optionFrom === "Currency..." ||
      optionTo === "Currency..."
    ) {
      setModal(!modal);
      setDisabled(!disabled);
    }
  }

  function changeCurrencyOption(e) {
    e.preventDefault();
    fetchCurrencies("https://www.cbr-xml-daily.ru/latest.js", setToCurrency);
  }

  return (
    <form
      onSubmit={(e) => {
        changeCurrencyOption(e);
        changeModalStatus();
      }}
      className="transfer"
    >
      <h1>Transfer to currency</h1>

      <BlockInput
        value={fromCurrency}
        setValue={setFromCurrency}
        option={optionFrom}
        setOption={setOptionFrom}
        placeholder={"from..."}
      />

      <div className="buttons">
        <Button disabled={disabled} type="submit" title={"transfer"} />

        <Button
          type="button"
          onClick={() => {
            setFromCurrency("");
            setToCurrency("");
            setOptionFrom("");
            setOptionTo("");
          }}
          title={"clear"}
        />
      </div>

      <BlockInput
        readOnly={true}
        value={toCurrency}
        setValue={setToCurrency}
        option={optionTo}
        setOption={setOptionTo}
        placeholder={"to..."}
      />

      <Modal
        onClick={changeModalStatus}
        modalClassName={modalClassName}
        modalContentClassName={modalContentClassName}
      />
    </form>
  );
}

export default TransferPage;
