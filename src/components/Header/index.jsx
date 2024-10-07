import styles from "./style.module.scss";
import logoLight from "../../assets/logoLight.svg";
import logoDark from "../../assets/logoDark.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../providers/ThemeContext";

export const Header = () => {
  const { light, setLight } = useContext(ThemeContext);
  const [logoClass, setLogoClass] = useState(styles.financeLight);

  const html = document.querySelector("html");

  const handleDarkMode = () => {
    html.classList.toggle("dark-mode");
    setLight(!light);
  };

  const changeLogo = () => {
    setLogoClass((prev) =>
      prev === styles.financeLight ? styles.financeDark : styles.financeLight
    );
  };

  const submit = () => {
    handleDarkMode();
    changeLogo();
  };

  useEffect(() => {
    const userPreference = localStorage.getItem("@DarkMode");
    if (userPreference === "true") {
      handleDarkMode();
      setLogoClass(styles.financeDark);
    }
  }, []);

  useEffect(() => {
    if (!light) {
      localStorage.setItem("@DarkMode", "true");
    } else {
      localStorage.setItem("@DarkMode", "false");
    }
  }, [light]);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        Control <span className={logoClass}>Finance</span>
      </h1>
      <button onClick={submit} className={styles.btn}>
        <FontAwesomeIcon icon={light ? faMoon : faSun} />
      </button>
    </header>
  );
};
