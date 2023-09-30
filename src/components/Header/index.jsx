import styles from "./style.module.scss";
import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="teste" />
    </header>
  );
};