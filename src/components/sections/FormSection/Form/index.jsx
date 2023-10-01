import { useState } from "react";
import { DescriptionInput } from "./DescriptionInput";
import { ValuesInputs } from "./ValuesInputs";
import styles from "./style.module.scss";

export const Form = ({ addValue, sumValues, notifyError }) => {
  const [description, setDescription] = useState("");
  const [money, setMoney] = useState("");
  const [type, setType] = useState("Entrada");

  const submit = (event) => {
    event.preventDefault();

    description !== "" && money !== ""
      ? addValue(description, money, type)
      : notifyError();

    setDescription("");
    setMoney("");
    sumValues();
  };

  return (
    <div className={styles.div}>
      <form>
        <DescriptionInput
          label="Descrição"
          type="text"
          id="Description"
          placeholder="Digite aqui sua descrição"
          span="Ex: Compra de roupas"
          value={description}
          setValue={setDescription}
        />
        <ValuesInputs
          addValue={addValue}
          money={money}
          setMoney={setMoney}
          type={type}
          setType={setType}
        />
        <button onClick={submit} className="btn" type="submit">
          Inserir Valor
        </button>
      </form>
    </div>
  );
};
