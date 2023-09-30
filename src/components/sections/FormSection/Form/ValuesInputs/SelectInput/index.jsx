import { Options } from "./Options";
import styles from "./style.module.scss";

export const SelectInput = ({ id, value, placeholder, setType }) => {
  return (
    <div className={styles.div}>
      <label className="label" htmlFor={id}>
        Tipo de valor
      </label>
      <select
        name={id}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(event) => setType(event.target.value)}
      >
        <Options value="Entrada" name="Entrada" />
        <Options value="Saída" name="Saída" />
      </select>
    </div>
  );
};