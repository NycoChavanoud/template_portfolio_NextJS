import styles from "../styles/Home.module.css";
import Image from "next/image";
import Cat from "../public/chat.jpg";

export default function Home() {
  return (
    <div>
      <h1 className={styles.titlePortfolio}>Bienvenue sur mon portfolio</h1>

      <div className={styles.container}>
        <Image src={Cat} alt="cat" layout="responsive" />
      </div>

      <p className={styles.biographie}>
        Cat ipsum dolor sit amet, please let me outside pouty face yay! wait,
        its cold out please let me inside pouty face oh, thank you rub against
        mommys leg oh it looks so nice out, please let me outside again the
        neighbor cat was mean to me please let me back inside, intently sniff
        hand immediately regret falling into bathtub but cough. Eat the
        rubberband sees bird in air, breaks into cage and attacks creature for
        paw at your fat belly and claw your carpet in places everyone can see -
        why hide my amazing artistic clawing skills?{" "}
      </p>
    </div>
  );
}
