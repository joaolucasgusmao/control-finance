import { useContext, useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { FormSection } from "./components/sections/FormSection";
import { ResultSection } from "./components/sections/ResultSection";
import "./styles/index.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "./providers/ThemeContext";

const App = () => {
  const { light } = useContext(ThemeContext);
  const [listValues, setListValues] = useState([]);

  const notifySuccess = () => {
    toast.success("Valor adicionado com sucesso!");
  };

  const notifyError = () => {
    toast.error("Por favor, preencha os campos!");
  };

  const notifyRemove = () => {
    toast.success("Valor removido com sucesso!");
  };

  const addValue = (description, value, type) => {
    const id = crypto.randomUUID();
    const newValue = { id, description, value, type };
    setListValues([...listValues, newValue]);
    notifySuccess();
  };

  const deleteValue = (id) => {
    const filteredValues = listValues.filter((value) => value.id !== id);
    setListValues(filteredValues);
  };

  const sumValues = () => {
    const totalValue = listValues.reduce((acc, current) => {
      return current.type === "Entrada"
        ? acc + parseInt(current.value)
        : current.type === "Saída"
        ? acc - parseInt(current.value)
        : acc;
    }, 0);
    return totalValue;
  };

  return (
    <>
      <ToastContainer autoClose={1000} theme={light ? "light" : "dark"} />
      <Header />
      <Main>
        <FormSection
          notifyError={notifyError}
          addValue={addValue}
          sumValues={sumValues}
          listValues={listValues}
        />
        <ResultSection
          notifyRemove={notifyRemove}
          deleteValue={deleteValue}
          listValues={listValues}
        />
      </Main>
    </>
  );
};

export default App;
