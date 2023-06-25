//Global
import { useEffect, useState } from "react";
import useGetCurrent from "../../hooks/http.hook";
import { v4 as uuidv4 } from "uuid";

//Components
import Input from "../../components/UI/inputs/Input";

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

  const showOptions = useGetCurrent;

  useEffect(() => {
    showOptions("https://www.cbr-xml-daily.ru/latest.js")
      .then((data) => {
        setOptions(() => {
          const optionsArr = Object.entries(data.rates);
          optionsArr.forEach((item) => item.pop());
          return optionsArr;
        });
      })
      .catch((err) => console.log(err));

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
        <option value={"Currency..."}>Currency...</option>

        {options.map((option) => (
          <option value={option} key={uuidv4()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BlockInput;