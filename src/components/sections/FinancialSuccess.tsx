import styles from './FinancialSuccess.module.css';

function FinancialSuccess() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>High Patient Satisfaction Leads to Financial Success</h2>
            <ul className={styles.benefits}>
              <li><em>higher operating margins</em></li>
              <li><em>higher revenue generation per adjusted patient day</em></li>
              <li><em>higher beneficiary incentive payments ($1,698 more per star rating)</em></li>
              <li><em>5% increase in patient retention = 25% to 95% increased profit</em></li>
              <li><em>3% higher net margins</em></li>
            </ul>
          </div>
          <div className={styles.hospitalGraphic}>
            <img src="/images/hospital.svg" alt="Hospital building" className={styles.hospitalImage} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinancialSuccess;
