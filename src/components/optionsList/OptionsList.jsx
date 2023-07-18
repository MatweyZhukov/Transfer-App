//Global
import { v4 as uuid } from "uuid";

//Components
import OptionSingle from "../optionSingle/OptionSingle";

const OptionsList = ({ options }) => {
  return (
    <>
      <option value="Currency...">Currency...</option>
      {options.map((option) => {
        const id = uuid();
        return <OptionSingle option={option} key={id} />;
      })}
    </>
  );
};

export default OptionsList;
