//Global
import { useEffect, useState } from "react";
import axios from "axios";

//Components
import Input from "../../components/UI/inputs/Input";
import OptionsList from "../optionsList/OptionsList";

//Styles
import "./blockInput.css";

function BlockInput({
  value,
  setValue,
  option,
  setOption,
  placeholder,
  readOnly,
}) {
  const [options, setOptions] = useState([]);

  async function fetchOptions(url) {
    try {
      const response = await axios.get(url);

      const optionsArr = Object.entries(response.data.rates);
      optionsArr.forEach((item) => item.pop());
      const resultArr = optionsArr.map((option) => option[0]);

      setOptions(resultArr);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchOptions("https://www.cbr-xml-daily.ru/latest.js");

    //eslint-disable-next-line
  }, []);

  return (
    <div className="block-input">
      <Input
        readOnly={readOnly}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder={placeholder}
        type="number"
      />

      <select value={option} onChange={(e) => setOption(e.target.value)}>
        <option value="Currency...">Currency...</option>
        <OptionsList options={options} />
      </select>
    </div>
  );
}

export default BlockInput;
