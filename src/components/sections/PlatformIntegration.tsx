import styles from './PlatformIntegration.module.css';

function PlatformIntegration() {
  return (
      <div className={styles.integrationSection}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src="/images/cog-big.png" alt="Cognicit Logo" />
        </div>

        <p className={styles.description}>
          Cognicit can be licensed as a stand-alone platform – or – integrated into existing Enterprise Resource Planning and Performance Management Systems providing actionable insights and risk analysis year-round
        </p>

        <img src="/images/notepages.svg" alt="Notepages" className={styles.integrationImage} />

      </div>
  );
}

export default PlatformIntegration;
