import classNames from 'classnames';
import styles from './KeyDrivers.module.css';

function KeyDrivers() {
  return (
    <div className={styles.keyDriversSection}>
      <div className="container">
        {/* Centered Title at Top */}


        <div className={styles.content}>
          <div className={styles.icebergContainer}>
            <img src="/images/berg.png" alt="Iceberg" className={styles.icebergImage} />
          </div>

          <div>
            <h2 className={classNames("section-title", styles.mainTitle)}>
              Key Drivers of Patient Experience are Measurable and Actionable
            </h2>

            {/* Right side - Text Content with arrows */}
            <div className={styles.rightContent}>
              <div className={styles.driversList}>
                <div className={styles.driverItem}>
                  <span className={styles.driverText}>
                    <em>Poor staff training + management</em> = <strong>Claims denials due to filing mistakes</strong>
                  </span>
                </div>

                <div className={styles.driverItem}>
                  <span className={styles.driverText}>
                    <em>High staff turnover</em> = <strong>Inability to receive timely care, appointments, information</strong>
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

        <div className={styles.references}>
          <h3>Sources:</h3>
          <ul>
            <li>
              <a
                href="https://www.aha.org/costsofcaring"
                target="_blank"
                rel="noopener noreferrer"
              >
                American Hospital Association: The Cost of Caring - Challenges Facing America's Hospitals in 2025
              </a>
            </li>
            <li>
              <a
                href="https://www.netsuite.com/portal/resource/articles/erp/healthcare-industry-challenges.shtml"
                target="_blank"
                rel="noopener noreferrer"
              >
                NetSuite: Healthcare Industry Challenges
              </a>
            </li>
            <li>
              <a
                href="https://guidehouse.com/-/media/www/site/insights/healthcare/2018/medicare-advantage-analysis.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Guidehouse: Medicare Advantage Analysis
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default KeyDrivers;
