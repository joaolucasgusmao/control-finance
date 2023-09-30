import styles from "./style.module.scss";

export const DescriptionInput = ({
  id,
  placeholder,
  value,
  type,
  span,
  setValue,
}) => {
  return (
    <div className={styles.div}>
      <label className="label" htmlFor={id}>
        Descrição
      </label>
      <input
        className="placeholder"
        type={type}
        value={value}
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={(event) => setValue(event.target.value)}
      />
      <span>{span}</span>
    </div>
  );
};