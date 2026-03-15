import Menu from "../../components/ui/Menu.js";
import Home from "../../sections/home/index.js";
import About from "../../sections/about/index.js";
import Portfolio from "../../sections/portfolio/index.js";
import styles from "./Landing.module.css";

export function Landing() {
  return (
    <main className={styles.page}>
      <Menu />
      <Home />
      <About />
      <Portfolio />
      <div id="contact" className={styles.anchor} aria-hidden="true" />
    </main>
  );
}
