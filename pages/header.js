import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.containerNav}>
      <ul className={styles.navigation}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>My projects</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact me</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
