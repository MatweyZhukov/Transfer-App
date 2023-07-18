//Components
import Button from "../../components/UI/buttons/Button";
import BlockInput from "../../components/blockInput/BlockInput";
import Modal from "../../components/modal/Modal";

//Global
import { useState } from "react";
import axios from "axios";

//Styles
import "./transferPage.css";

function TransferPage({ clearValue }) {
  const [fromCurrency, setFromCurrency] = useState(""),
    [toCurrency, setToCurrency] = useState("");

  const [optionFrom, setOptionFrom] = useState(""),
    [optionTo, setOptionTo] = useState("");

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

      const currValue = Number(fromCurrency) / response.data.rates[optionFrom],
        result = currValue * response.data.rates[optionTo];

      if (
        fromCurrency &&
        optionFrom &&
        optionTo &&
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
      !optionFrom ||
      !optionTo ||
      optionFrom === "Currency..." ||
      optionTo === "Currency..."
    ) {
      setModal(!modal);
      setDisabled(!disabled);
    }
  }

  function changeCurrencyOption() {
    fetchCurrencies("https://www.cbr-xml-daily.ru/latest.js", setToCurrency);
  }

  return (
    <div className="transfer">
      <h1>Transfer to currency</h1>

      <BlockInput
        value={fromCurrency}
        setValue={setFromCurrency}
        option={optionFrom}
        setOption={setOptionFrom}
        placeholder={"from..."}
      />

      <div className="buttons">
        <Button
          onClick={() => {
            changeCurrencyOption();
            changeModalStatus();
          }}
          disabled={disabled}
          type="button"
          title={"transfer"}
        />

        <Button
          type="button"
          onClick={() =>
            clearValue([
              setFromCurrency,
              setToCurrency,
              setOptionFrom,
              setOptionTo,
            ])
          }
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
    </div>
  );
}

export default TransferPage;
