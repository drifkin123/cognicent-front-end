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
        
        <div className={styles.quarterlyTimeline}>
          <div className={`${styles.quarter} ${styles.q1}`}>
            <div className={styles.quarterHeader}>
              <div className={styles.quarterCircle}>Q1</div>
            </div>
            <div className={styles.quarterContent}>
              <div className={styles.iconContainer}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </div>
              <h4>Assess Staff</h4>
              <p>Full assessment = 1 hr</p>
            </div>
          </div>
          
          <div className={`${styles.quarter} ${styles.q2}`}>
            <div className={styles.quarterHeader}>
              <div className={styles.quarterCircle}>Q2</div>
            </div>
            <div className={styles.quarterContent}>
              <div className={styles.iconContainer}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="12" r="1"></circle>
                  <circle cx="9" cy="5" r="1"></circle>
                  <circle cx="9" cy="19" r="1"></circle>
                  <path d="M20 12h.01"></path>
                  <path d="M20 5h.01"></path>
                  <path d="M20 19h.01"></path>
                  <path d="M3 7l6 6"></path>
                  <path d="M14 15l6 6"></path>
                  <path d="M9 10a3 3 0 0 0 0 4"></path>
                </svg>
              </div>
              <h4>Analyze Findings</h4>
              <p>by Role, Team,<br />Manager, Care Domains</p>
            </div>
          </div>
          
          <div className={`${styles.quarter} ${styles.q3}`}>
            <div className={styles.quarterHeader}>
              <div className={styles.quarterCircle}>Q3</div>
            </div>
            <div className={styles.quarterContent}>
              <div className={styles.iconContainer}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"></polygon>
                </svg>
              </div>
              <h4>Mid-year</h4>
              <p>Staff "Pulse Check"<br />mini assessment =<br />30 min</p>
            </div>
          </div>
          
          <div className={`${styles.quarter} ${styles.q4}`}>
            <div className={styles.quarterHeader}>
              <div className={styles.quarterCircle}>Q4</div>
            </div>
            <div className={styles.quarterContent}>
              <div className={styles.iconContainer}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h4>Year-end</h4>
              <p>Cognicit Trend Analysis<br />and Recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default PlatformIntegration;
