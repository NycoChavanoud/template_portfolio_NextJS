import { useState } from "react";
import styles from "../styles/Home.module.css";
import Layout from "./layout";

export default function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, mail);
    setName("");
    setMail("");
  };

  return (
    <Layout title="Contact">
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name"> Name </label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="mail"> Mail </label>
        <input
          type="text"
          placeholder="Email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <button type="submit">SEND</button>
      </form>
    </Layout>
  );
}
