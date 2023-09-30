import styles from "./style.module.scss";

export const TotalValue = ({ sumValues }) => {
  const total = sumValues();

  const formattedTotal = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className={styles.container}>
      <div>
        <h2 className="title1">Valor total:</h2>
        <span className="label type">O valor se refere ao saldo</span>
      </div>
      <p className="title1 result">{formattedTotal}</p>
    </div>
  );
};