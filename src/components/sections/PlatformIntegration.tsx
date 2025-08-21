import Section from '../../components/common/Section';
import styles from './PlatformIntegration.module.css';

function PlatformIntegration() {
  return (
    <Section id="platform-integration">
      <div className={styles.integrationSection}>
        <div className={styles.logoContainer}>
          <img src="/images/cognicit_logo_square_cyan.svg" alt="Cognicit Logo" className={styles.logo} />
          <h2 className={styles.brandName}>COGNICIT</h2>
        </div>

        <p className={styles.description}>
          Cognicit can be licensed as a stand-alone platform – or – integrated into existing Enterprise Resource Planning and Performance Management Systems providing actionable insights and risk analysis year-round
        </p>

        <img src="/images/notepages.svg" alt="Notepages" className={styles.integrationImage} />

      </div>
    </Section>
  );
}

export default PlatformIntegration;
