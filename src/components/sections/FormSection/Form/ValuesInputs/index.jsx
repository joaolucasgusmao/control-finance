import { SelectInput } from "./SelectInput";
import { ValueInput } from "./ValueInput";
import styles from "./style.module.scss";

export const ValuesInputs = ({ setMoney, setType, money, type }) => {
  
  return (
    <div className={styles.div}>
      <ValueInput
        id="ValueInput"
        type="Number"
        placeholder="1"
        value={money}
        setValue={setMoney}
      />
      <SelectInput
        label="Tipo de valor"
        id="SelectInput"
        value={type}
        setType={setType}
      />
    </div>
  );
};