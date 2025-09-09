import Section from '../../components/common/Section';
import styles from './RiskAssessment.module.css';

function RiskAssessment() {
  return (
    <div className={styles.riskSection}>
      <h2 className={styles.title}>A comprehensive risk assessment, drillable by department, manager, and individual contributor</h2>

      <div className={styles.tableContainer}>
        <table className={styles.riskTable}>
          <thead>
            <tr>
              <th className={styles.departmentHeader}>Risk Levels by<br />Department</th>
              <th>Average Patient<br />Satisfaction</th>
              <th>Average Cognitive<br />Capacity</th>
              <th>Problem<br />Solving Skills</th>
              <th>Decision-Making<br />Bias</th>
              <th>Judgment and<br />Decision Making</th>
              <th>Sense of Personal<br />Responsibility</th>
              <th>Teamwork</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Anesthesiology</td>
              <td>57%</td>
              <td><span className={styles.low}>Low</span></td>
              <td><span className={styles.low}>Low</span></td>
              <td><span className={styles.high}>High</span></td>
              <td><span className={styles.moderate}>Moderate</span></td>
              <td><span className={styles.low}>Low</span></td>
              <td><span className={styles.low}>Low</span></td>
            </tr>
            <tr>
              <td>Dermatology</td>
              <td>75%</td>
              <td><span className={styles.low}>Low</span></td>
              <td><span className={styles.low}>Low</span></td>
              <td><span className={styles.high}>High</span></td>
              <td><span className={styles.high}>High</span></td>
              <td><span className={styles.high}>High</span></td>
              <td><span className={styles.low}>Low</span></td>
            </tr>
            <tr>
              <td>Emergency Medicine</td>
              <td>35%</td>
              <td><span className={styles.low}>Low</span></td>
              <td><span className={styles.moderate}>Moderate</span></td>
              <td><span className={styles.critical}>Critical</span></td>
              <td><span className={styles.high}>High</span></td>
              <td><span className={styles.high}>High</span></td>
              <td><span className={styles.critical}>Critical</span></td>
            </tr>
            <tr>
              <td>Family Medicine</td>
              <td>65%</td>
              <td><span className={styles.low}>Low</span></td>
              <td><span className={styles.low}>Low</span></td>
              <td><span className={styles.moderate}>Moderate</span></td>
              <td><span className={styles.moderate}>Moderate</span></td>
              <td><span className={styles.high}>High</span></td>
              <td><span className={styles.moderate}>Moderate</span></td>
            </tr>
            <tr>
              <td>Obstetrics & Gynecology</td>
              <td>42%</td>
              <td><span className={styles.low}>Low</span></td>
              <td><span className={styles.critical}>Critical</span></td>
              <td><span className={styles.critical}>Critical</span></td>
              <td><span className={styles.moderate}>Moderate</span></td>
              <td><span className={styles.critical}>Critical</span></td>
              <td><span className={styles.moderate}>Moderate</span></td>
            </tr>
            <tr>
              <td>Orthopaedic Surgery</td>
              <td>82%</td>
              <td><span className={styles.low}>Low</span></td>
              <td><span className={styles.moderate}>Moderate</span></td>
              <td><span className={styles.moderate}>Moderate</span></td>
              <td><span className={styles.low}>Low</span></td>
              <td><span className={styles.moderate}>Moderate</span></td>
              <td><span className={styles.moderate}>Moderate</span></td>
            </tr>
            <tr>
              <td>Pediatrics</td>
              <td>63%</td>
              <td><span className={styles.low}>Low</span></td>
              <td><span className={styles.critical}>Critical</span></td>
              <td><span className={styles.low}>Low</span></td>
              <td><span className={styles.moderate}>Moderate</span></td>
              <td><span className={styles.moderate}>Moderate</span></td>
              <td><span className={styles.low}>Low</span></td>
            </tr>
            <tr>
              <td>Oncology</td>
              <td>92%</td>
              <td><span className={styles.low}>Low</span></td>
              <td><span className={styles.low}>Low</span></td>
              <td><span className={styles.low}>Low</span></td>
              <td><span className={styles.low}>Low</span></td>
              <td><span className={styles.low}>Low</span></td>
              <td><span className={styles.low}>Low</span></td>
            </tr>
            <tr>
              <td>Surgery</td>
              <td>51%</td>
              <td><span className={styles.low}>Low</span></td>
              <td><span className={styles.low}>Low</span></td>
              <td><span className={styles.moderate}>Moderate</span></td>
              <td><span className={styles.low}>Low</span></td>
              <td><span className={styles.low}>Low</span></td>
              <td><span className={styles.low}>Low</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RiskAssessment;
