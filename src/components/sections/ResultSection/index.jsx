import { FinancialSummary } from "./FinancialSummary";

export const ResultSection = ({ deleteValue, listValues, notifyRemove }) => {
  return (
    <section>
      <FinancialSummary
        notifyRemove={notifyRemove}
        deleteValue={deleteValue}
        listValues={listValues}
      />
    </section>
  );
};