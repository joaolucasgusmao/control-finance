import styles from "./style.module.scss";

export const Cards = ({
  id,
  title,
  type,
  value,
  deleteValue,
  notifyRemove,
}) => {
  const formattedValue = parseFloat(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <li
      className={
        type === "Entrada"
          ? `${styles.list} ${styles.credit}`
          : `${styles.list}`
      }
    >
      <div className={styles.typeDiv}>
        <h2 className="title1">{title}</h2>
        <span className="label type">{type}</span>
      </div>
      <div className={styles.valueDiv}>
        <h3 className="label">{formattedValue}</h3>
        <button
          onClick={() => {
            deleteValue(id);
            notifyRemove();
          }}
          className={styles.delete}
        >
          Excluir
        </button>
      </div>
    </li>
  );
};