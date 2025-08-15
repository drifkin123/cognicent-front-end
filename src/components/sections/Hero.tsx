import styles from './Hero.module.css';

function Hero() {
  return (
    <section id="hero" className={styles.section}>
      <div className={styles.hero}>
        <div className={styles.leftCol}>
          <div className={styles.logoSection}>
            <img src="/images/cognicit_logo_bug.svg" alt="Cognicit Logo" className={styles.logo} />
            <h1 className={styles.companyName}>COGNICIT</h1>
          </div>
        </div>
        <div className={styles.rightCol}>
          <h2 className={styles.visionTitle}>Our <span className={styles.visionHighlight}>Vision</span></h2>
          <p className={styles.visionText}>
            Increase healthcare patient satisfaction, effectiveness and profitability through organizational analysis
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;


