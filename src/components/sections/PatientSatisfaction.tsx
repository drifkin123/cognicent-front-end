import Section from '../../components/common/Section';
import styles from './PatientSatisfaction.module.css';

function PatientSatisfaction() {
  return (
    <div className={styles.blueSection}>
      <div className={styles.backgroundContainer}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.textContent}>
              <div className={styles.topText}>
                <p>Organizational effectiveness in healthcare organizations depends on delivering a positive customer experience.</p>
                <p>Organizations are compensated and reimbursed commensurate with their patient experience scores.</p>
                <p>Cognicit is the only tool that can scientifically measure the factors that drive patient outcomes and prescribe actionable improvements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.darkerSection}></div>
    </div>
  );
}

export default PatientSatisfaction;
