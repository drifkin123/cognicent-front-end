import Section from '../../components/common/Section';
import styles from './HospitalComparison.module.css';

function HospitalComparison() {
  return (
    <Section id="comparison">
      <div className={styles.comparisonContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>High - vs - Low</h2>
        </div>

        <div className={styles.hospitalsGrid}>
          <div className={styles.hospital}>
            <div className={styles.hospitalHeader}>
              <h3>Northern Westchester Hospital, NY</h3>
              <p className={styles.beds}>(245 beds)</p>
              <div className={styles.stars}>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
              </div>
            </div>

            <div className={styles.metricsTable}>
              <div className={styles.metric}>
                <span className={styles.label}>Claims denial average</span>
                <span className={styles.value}>7%</span>
              </div>
              <div className={`${styles.metric} ${styles.highlighted}`}>
                <span className={styles.label}>Staff turnover</span>
                <span className={styles.value}>7.4 %</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.label}>Patients who would recommend</span>
                <span className={styles.value}>82%</span>
              </div>
              <div className={`${styles.metric} ${styles.highlighted}`}>
                <span className={styles.label}>2024 Operating Revenue</span>
                <span className={styles.value}>$18.6 B</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.label}>Operating Margin</span>
                <span className={styles.value}>1.6%</span>
              </div>
              <div className={`${styles.metric} ${styles.highlighted}`}>
                <span className={styles.label}>Average Profit Per Bed</span>
                <span className={styles.value}>$2,778 per patient</span>
              </div>
            </div>
          </div>

          <div className={styles.hospital}>
            <div className={styles.hospitalHeader}>
              <h3>Westchester Medical Center, NY</h3>
              <p className={styles.beds}>(652 beds)</p>
              <div className={styles.stars}>
                <div className={styles.star}></div>
              </div>
            </div>

            <div className={styles.metricsTable}>
              <div className={styles.metric}>
                <span className={styles.label}>Claims denial average</span>
                <span className={styles.value}>15.7%</span>
              </div>
              <div className={`${styles.metric} ${styles.highlighted}`}>
                <span className={styles.label}>Staff turnover:</span>
                <span className={styles.value}>12%</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.label}>Patients who would recommend</span>
                <span className={styles.value}>57%</span>
              </div>
              <div className={`${styles.metric} ${styles.highlighted}`}>
                <span className={styles.label}>2024 Operating Revenue</span>
                <span className={styles.value}>$3 B</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.label}>Operating Margin:</span>
                <span className={styles.value}>.98%</span>
              </div>
              <div className={`${styles.metric} ${styles.highlighted}`}>
                <span className={styles.label}>Average Profit Per Bed</span>
                <span className={styles.value}>$913 per patient</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.conclusion}>
          <p>Improving from a 3 star to 4 star rating can increase revenue between 13.4% — 17.6%</p>
        </div>
        <div className={styles.references}>
          <h3>Sources:</h3>
          <ul>
            <li>
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S1544319123000778" target="_blank" rel="noopener noreferrer">
                ScienceDirect: Hospital quality ratings and patient experience
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default HospitalComparison;
