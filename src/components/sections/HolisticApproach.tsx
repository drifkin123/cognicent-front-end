import Section from '../../components/common/Section';
import styles from './HolisticApproach.module.css';

function HolisticApproach() {
  return (
    <Section id="opportunity">
      <div className={styles.opportunitySection}>
        <h2 className={styles.title}>The Opportunity</h2>
        <p className={styles.subtitle}>
          Cognicit uses a proven scientific assessment to identify, address, and improve the behavioral factors that lead to higher patient satisfaction and financial performance
        </p>
        
        <div className={styles.logoContainer}>
          <img src="/images/cognicit_logo_square_cyan.svg" alt="Cognicit Logo" className={styles.logo} />
          <h3 className={styles.brandName}>COGNICIT</h3>
        </div>
        
        <div className={styles.iconsGrid}>
          {/* Magnifying glass - Analysis/Research */}
          <div className={styles.icon}>
            <svg viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </div>
          
          {/* Medical cross - Healthcare */}
          <div className={styles.icon}>
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 8v8M8 12h8"/>
            </svg>
          </div>
          
          {/* Caduceus - Medical symbol */}
          <div className={styles.icon}>
            <svg viewBox="0 0 24 24">
              <path d="M12 2v20M8 5l8 6-8 6"/>
              <circle cx="12" cy="9" r="2"/>
              <circle cx="12" cy="15" r="2"/>
            </svg>
          </div>
          
          {/* Clipboard with medical cross */}
          <div className={styles.icon}>
            <svg viewBox="0 0 24 24">
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
              <path d="M12 10v6M9 13h6"/>
            </svg>
          </div>
          
          {/* Heart with pulse */}
          <div className={styles.icon}>
            <svg viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              <path d="M3.5 12h3l2-3 2 6 2-3h3"/>
            </svg>
          </div>
          
          {/* Brain/Head - Mental health */}
          <div className={styles.icon}>
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 8v8M8 12h8"/>
              <circle cx="9" cy="9" r="1"/>
              <circle cx="15" cy="9" r="1"/>
            </svg>
          </div>
          
          {/* Hospital building */}
          <div className={styles.icon}>
            <svg viewBox="0 0 24 24">
              <rect x="3" y="6" width="18" height="15" rx="2"/>
              <path d="M3 6l9-4 9 4"/>
              <path d="M12 9v6M9 12h6"/>
            </svg>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default HolisticApproach;


