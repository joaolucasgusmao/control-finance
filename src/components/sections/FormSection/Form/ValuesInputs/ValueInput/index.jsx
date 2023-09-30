import styles from "./style.module.scss";

export const ValueInput = ({ type, id, placeholder, value, setValue }) => {
  return (
    <div className={styles.div}>
      <label className="label" htmlFor={id}>
        Valor (R$)
      </label>
      <input
        className="placeholder"
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};