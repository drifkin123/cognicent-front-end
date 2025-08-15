import Section from '../../components/common/Section';
import styles from './AssessmentMethod.module.css';

function AssessmentMethod() {
  return (
    <Section id="assessment">
      <div className={styles.assessmentSection}>
        <h2 className={styles.title}>The Opportunity</h2>
        <p className={styles.subtitle}>
          By testing a representative sample of hospital employees, Cognicit uses proven scientific approaches to map cognition, emotion, and decision-making behaviors.
        </p>
        
        <div className={styles.processGrid}>
          <div className={styles.processStep}>
            <div className={styles.iconContainer}>
              <svg className={styles.icon} viewBox="0 0 100 100" width="60" height="60">
                <rect x="20" y="15" width="45" height="55" fill="none" stroke="currentColor" strokeWidth="3" rx="3"/>
                <line x1="30" y1="25" x2="55" y2="25" stroke="currentColor" strokeWidth="2"/>
                <line x1="30" y1="35" x2="55" y2="35" stroke="currentColor" strokeWidth="2"/>
                <line x1="30" y1="45" x2="45" y2="45" stroke="currentColor" strokeWidth="2"/>
                <path d="M75 35 L85 45 L75 55 L70 50 L75 45 L70 40 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                <line x1="72" y1="42" x2="72" y2="48" stroke="currentColor" strokeWidth="2"/>
                <line x1="69" y1="45" x2="75" y2="45" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className={styles.stepTitle}>HOW I FEEL</h3>
            <ul className={styles.stepList}>
              <li>- openness</li>
              <li>- conscientiousness</li>
              <li>- empathy</li>
              <li>- personality stability</li>
              <li>- risk propensity</li>
            </ul>
          </div>
          
          <div className={styles.plus}>+</div>
          
          <div className={styles.processStep}>
            <div className={styles.iconContainer}>
              <svg className={styles.icon} viewBox="0 0 100 100" width="60" height="60">
                <path d="M50 20 C60 20, 70 30, 70 45 C70 60, 60 70, 50 80 C40 70, 30 60, 30 45 C30 30, 40 20, 50 20 Z" fill="none" stroke="currentColor" strokeWidth="3"/>
                <path d="M35 40 L45 50 L50 45 L55 50 L65 35" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className={styles.stepTitle}>HOW I WORK</h3>
            <ul className={styles.stepList}>
              <li>- job task awareness</li>
              <li>- supervision</li>
              <li>- training satisfaction</li>
              <li>- autonomy</li>
              <li>- personal responsibility</li>
            </ul>
          </div>
          
          <div className={styles.plus}>+</div>
          
          <div className={styles.processStep}>
            <div className={styles.iconContainer}>
              <svg className={styles.icon} viewBox="0 0 100 100" width="60" height="60">
                <circle cx="50" cy="35" r="20" fill="none" stroke="currentColor" strokeWidth="3"/>
                <path d="M30 55 Q50 45, 70 55 Q70 75, 50 85 Q30 75, 30 55" fill="none" stroke="currentColor" strokeWidth="3"/>
                <line x1="45" y1="30" x2="45" y2="40" stroke="currentColor" strokeWidth="2"/>
                <line x1="40" y1="35" x2="50" y2="35" stroke="currentColor" strokeWidth="2"/>
                <line x1="55" y1="30" x2="55" y2="40" stroke="currentColor" strokeWidth="2"/>
                <line x1="50" y1="35" x2="60" y2="35" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className={styles.stepTitle}>HOW I THINK</h3>
            <ul className={styles.stepList}>
              <li>- cognitive ability</li>
              <li>- decision-making</li>
              <li>- bias triggers</li>
            </ul>
          </div>
          
          <div className={styles.equals}>=</div>
          
          <div className={styles.processStep}>
            <div className={styles.iconContainer}>
              <svg className={styles.icon} viewBox="0 0 100 100" width="60" height="60">
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="3"/>
                <circle cx="50" cy="50" r="3" fill="currentColor"/>
                <line x1="50" y1="50" x2="65" y2="35" stroke="currentColor" strokeWidth="2"/>
                <circle cx="65" cy="35" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M58 28 L62 32 L67 27 L72 32 L76 28" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <h3 className={styles.stepTitle}>HOW I IMPROVE</h3>
            <ul className={styles.stepList}>
              <li>- Data-driven</li>
              <li className={styles.multiLine}>comparisons +<br/>AI-generated<br/>personalized<br/>improvement plan</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottomText}>
          <h4>1 hour, twice a year for a comprehensive assessment and continuous improvement</h4>
        </div>
      </div>
    </Section>
  );
}

export default AssessmentMethod;
