import Section from '../../components/common/Section';
import styles from './Problem.module.css';

function Problem() {
  return (
    <Section id="problem" title="The Problem + Opportunity Space">
      <div className={styles.stack}>
        <p>
          <strong>Cognitive bias in healthcare is a widespread problem that affects patient outcomes, institutional performance, and healthcare equity.</strong>
        </p>
        
        <div className={styles.statsGrid}>
          <div className={styles.stat}>
            <h3>40-50%</h3>
            <p>of medical errors are attributed to cognitive bias <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4928186/" target="_blank" rel="noopener noreferrer">*</a></p>
          </div>
          <div className={styles.stat}>
            <h3>$131B</h3>
            <p>estimated annual cost of diagnostic errors in the US <a href="https://www.hopkinsmedicine.org/news/media/releases/study_suggests_medical_errors_now_third_leading_cause_of_death_in_the_us" target="_blank" rel="noopener noreferrer">*</a></p>
          </div>
          <div className={styles.stat}>
            <h3>12M</h3>
            <p>Americans experience diagnostic errors each year <a href="https://www.nap.edu/catalog/21794/improving-diagnosis-in-health-care" target="_blank" rel="noopener noreferrer">*</a></p>
          </div>
        </div>

        <div className={styles.examples}>
          <p>Imagine knowing that a doctor might delay life-saving medical treatment for your friend just because he struggles with depression.</p>
          <p>Imagine mourning the death of your co-worker and her baby who are the latest casualties of the climbing U.S. black maternal mortality rate.</p>
          <p>Imagine fighting for proper care for your parent just because they are aging and disabled.</p>
          <p>Imagine being treated like you can't comprehend a doctor just because you speak with an accent.</p>
        </div>
        
        <p className={styles.strong}>If cognitive bias in healthcare hasn't impacted you and those you care for yet, it will.</p>
      </div>
    </Section>
  );
}

export default Problem;


