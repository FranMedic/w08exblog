import styles from "./index.module.css";

const Home = () => (
  <div className={styles.container}>
    <main>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">FrannyCat!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing <code>pages/index.js</code>
      </p>
    </main>
  </div>
);

export default Home;
