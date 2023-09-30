import styles from "./style.module.scss"

export const Main = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};