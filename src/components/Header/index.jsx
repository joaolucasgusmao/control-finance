import styles from "./style.module.scss";
import logoLight from "../../assets/logoLight.svg";
import logoDark from "../../assets/logoDark.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../providers/ThemeContext";

export const Header = () => {
  const { light, setLight } = useContext(ThemeContext);
  const html = document.querySelector("html");

  const handleDarkMode = () => {
    html.classList.toggle("dark-mode");
    setLight(!light);
  };

  const changeImg = () => {
    const img = document.querySelector("img");
    img.src = light ? logoDark : logoLight;
  };

  const submit = () => {
    handleDarkMode();
    changeImg();
  };

  useEffect(() => {
    const userPreference = localStorage.getItem("@DarkMode");
    if (userPreference === "true") {
      handleDarkMode();
      changeImg();
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
      <img src={logoLight} alt="Logo" />
      <button onClick={submit} className={styles.btn}>
        <FontAwesomeIcon icon={light ? faMoon : faSun} />
      </button>
    </header>
  );
};
