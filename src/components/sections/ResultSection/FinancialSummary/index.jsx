import { Cards } from "./Cards";
import styles from "./style.module.scss";

export const FinancialSummary = ({ listValues, deleteValue, notifyRemove }) => {
  return (
    <div className={styles.div}>
      <h2 className="title1">Resumo Financeiro</h2>
      {listValues.length === 0 ? (
        <p>Você ainda não possui nenhum lançamento</p>
      ) : (
        <ul>
          {listValues.map((card) => {
            const { description, value, type, id } = card;
            return (
              <Cards
                id={id}
                title={description}
                value={value}
                type={type}
                key={id}
                deleteValue={deleteValue}
                notifyRemove={notifyRemove}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};