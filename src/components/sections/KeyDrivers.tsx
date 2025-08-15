import styles from './KeyDrivers.module.css';

function KeyDrivers() {
  return (
    <div className={styles.keyDriversSection}>
      <div className={styles.container}>
        {/* Centered Title at Top */}
        <h1 className={styles.mainTitle}>
          Key Drivers of Patient Experience<br />
          are Measurable and Actionable
        </h1>
        
        <div className={styles.content}>
          {/* Left side - Hospital and Iceberg */}
          <div className={styles.leftContent}>
            <div className={styles.hospitalContainer}>
              <img src="/images/hospital.svg" alt="Hospital" className={styles.hospitalImage} />
            </div>
            <div className={styles.icebergContainer}>
              <img src="/images/iceberg.svg" alt="Iceberg" className={styles.icebergImage} />
              
              {/* Arrows and connection lines - positioned via CSS */}
              <div className={styles.arrowLine}>
                <div className={styles.horizontalArrow}></div>
              </div>
              <div className={styles.arrowLine}>
                <div className={styles.horizontalArrow}></div>
              </div>
              <div className={styles.arrowLine}>
                <div className={styles.horizontalArrow}></div>
              </div>
              <div className={styles.arrowLine}>
                <div className={styles.horizontalArrow}></div>
              </div>
            </div>
          </div>
          
          {/* Right side - Text Content */}
          <div className={styles.rightContent}>
            <div className={styles.driversList}>
              <div className={styles.driverItem}>
                <span className={styles.driverText}>
                  <em>Poor staff training + management</em> = <strong>Claims denials due to filing mistakes</strong>
                </span>
              </div>
              
              <div className={styles.driverItem}>
                <span className={styles.driverText}>
                  <em>High staff turnover</em> = <strong>inability to receive timely care, appointments, information</strong>
                </span>
              </div>
              
              <div className={styles.driverItem}>
                <span className={styles.driverText}>
                  <em>Lack of communication + teamwork</em> = <strong>Poor care coordination</strong>
                </span>
              </div>
              
              <div className={styles.driverItem}>
                <span className={styles.driverText}>
                  <em>Poor decision-making + management</em> = <strong>Low patient resources & courtesy</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyDrivers;
