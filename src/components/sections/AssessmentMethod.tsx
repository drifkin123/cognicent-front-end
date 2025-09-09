import Section from '../../components/common/Section';
import styles from './AssessmentMethod.module.css';

function AssessmentMethod() {
  return (
    <Section id="assessment">
      <div className={styles.assessmentSection}>
        <p className={styles.subtitle}>
          By testing a representative sample of hospital employees, Cognicit uses proven scientific approaches to map cognition, emotion, and decision-making behaviors.
        </p>

        <div className={styles.processGrid}>
          <div className={styles.processStep}>
            <div className={styles.iconContainer}>
              <img src="/images/cog-4.png" alt="Cognicit Logo" />
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
              <img src="/images/cog-5.png" alt="Cognicit Logo" />
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
              <img src="/images/cog-6.png" alt="Cognicit Logo" />
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
              <img src="/images/cog-1.png" alt="Cognicit Logo" />

            </div>
            <h3 className={styles.stepTitle}>HOW I IMPROVE</h3>
            <ul className={styles.stepList}>
              <li>- Data-driven</li>
              <li className={styles.multiLine}>comparisons +<br />AI-generated<br />personalized<br />improvement plan</li>
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
