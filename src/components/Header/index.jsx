import styles from "./style.module.scss";
import logoLight from "../../assets/logoLight.svg";
import logoDark from "../../assets/logoDark.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Header = () => {
  const [light, setLight] = useState(true);

  const changeImg = () => {
    const html = document.querySelector("html");
    const img = document.querySelector("img");
    html.classList.contains("dark-mode")
      ? (img.src = logoDark)
      : (img.src = logoLight);
  };

  const handleDarkMode = () => {
    const html = document.querySelector("html");
    html.classList.toggle("dark-mode");
    setLight(!light);
  };

  const submit = () => {
    handleDarkMode();
    changeImg();
  };

  return (
    <header className={styles.header}>
      <img src={logoLight} alt="Logo" />
      <button onClick={submit} className={styles.btn}>
        <FontAwesomeIcon icon={light ? faMoon : faSun} />
      </button>
    </header>
  );
};