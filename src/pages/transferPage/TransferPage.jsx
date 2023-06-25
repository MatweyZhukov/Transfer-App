//Components
import Button from "../../components/UI/buttons/Button";
import BlockInput from "../../components/blockInput/BlockInput";

//Global
import { useState } from "react";
import useGetCurrent from "../../hooks/http.hook";

//Styles
import "./transferPage.css";

function TransferPage({ clearValue }) {
  const [fromCurrency, setFromCurrency] = useState(""),
    [toCurrency, setToCurrency] = useState("");

  const [optionFrom, setOptionFrom] = useState(""),
    [optionTo, setOptionTo] = useState("");

  const getCurrent = useGetCurrent;

  function changeCurrencyOption() {
    getCurrent("https://www.cbr-xml-daily.ru/latest.js")
      .then((data) => {
        const result = (
          (fromCurrency / data.rates[optionFrom]) *
          data.rates[optionTo]
        ).toFixed(3);

        setToCurrency(result);
      })
      .catch((err) => console.log(err));
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
          onClick={changeCurrencyOption}
          type="button"
          title={"transfer"}
        />
        <Button
          type="button"
          onClick={() => clearValue([setFromCurrency, setToCurrency])}
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
    </div>
  );
}

export default TransferPage;
