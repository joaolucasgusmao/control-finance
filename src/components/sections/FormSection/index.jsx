import { Form } from "./Form";
import { TotalValue } from "./TotalValue";
import styles from "./style.module.scss";

export const FormSection = ({
  addValue,
  sumValues,
  listValues,
  notifyError,
}) => {
  return (
    <section className={styles.section}>
      <Form
        notifyError={notifyError}
        addValue={addValue}
        sumValues={sumValues}
        listValues={listValues}
      />
      {listValues.length > 0 ? <TotalValue sumValues={sumValues} /> : null}
    </section>
  );
};