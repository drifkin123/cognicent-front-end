import Section from '../../components/common/Section';
import styles from './BehavioralProfiles.module.css';

function BehavioralProfiles() {
  return (
    <Section id="behavioral-profiles">
      <div className={styles.profilesSection}>
        <h2 className={styles.title}>
          Cognicit recognizes that ideal behaviors and traits vary by job role
        </h2>

        <div className={styles.tablesContainer}>
          {/* Radiologist Table */}
          <div className={styles.tableWrapper}>
            <div className={styles.tableContainer}>
              <table className={styles.profileTable}>
                <thead>
                  <tr>
                    <th className={styles.tableHeader} colSpan={2}>
                      Low Risk Behavioral Role Profile: Radiologist
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.sectionHeader} colSpan={2}>
                      Disposition - "How I Feel"
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Openness</td>
                    <td><div className={styles.moderate}>moderate</div></td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Conscientiousness</td>
                    <td><div className={styles.high}>high</div></td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Extraversion</td>
                    <td><div className={styles.lowModerate}>low moderate</div></td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Agreeableness</td>
                    <td><div className={styles.moderate}>moderate</div></td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Personality Stability</td>
                    <td><div className={styles.high}>high</div></td>
                  </tr>
                  <tr>
                    <td className={styles.sectionHeader} colSpan={2}>
                      Job Task Context - "How I Work"
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Personal Responsibility</td>
                    <td><div className={styles.high}>high</div></td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Autonomy</td>
                    <td><div className={styles.veryHigh}>very high</div></td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Risk-Taking</td>
                    <td><div className={styles.low}>low</div></td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Teamwork</td>
                    <td ><div className={styles.lowModerate}>low moderate</div></td>
                  </tr>
                  <tr>
                    <td className={styles.sectionHeader} colSpan={2}>
                      Information Processing & Decision-Making - "How I Think"
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Anchoring</td>
                    <td><div className={styles.low}>low</div></td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Confirmation</td>
                    <td><div className={styles.low}>low</div></td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Self-serving</td>
                    <td><div className={styles.low}>low</div></td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Overconfidence</td>
                    <td><div className={styles.low}>low</div></td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Framing</td>
                    <td><div className={styles.low}>low</div></td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>General Cognition</td>
                    <td><div className={styles.high}>high</div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ER Physician Table */}
          <div className={styles.tableWrapper}>
            <div className={styles.tableContainer}>
              <table className={styles.profileTable}>
                <thead>
                  <tr>
                    <th className={styles.tableHeader} colSpan={2}>
                      Low Risk Behavioral Role Profile: ER Physician
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.sectionHeader} colSpan={2}>
                      Disposition - "How I Feel"
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Openness</td>
                    <td><div className={styles.veryHigh}>very high</div></td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Conscientiousness</td>
                    <td><div className={styles.moderate}>moderate</div></td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Extraversion</td>
                    <td ><div className={styles.moderate}>moderate</div></td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Agreeableness</td>
                    <td><div className={styles.veryHigh}>very high</div></td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Personality Stability</td>
                    <td><div className={styles.veryHigh}>very high</div></td>
                  </tr>
                  <tr>
                    <td className={styles.sectionHeader} colSpan={2}>
                      Job Task Context - "How I Work"
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Personal Responsibility</td>
                    <td><div className={styles.veryHigh}>very high</div></td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Autonomy</td>
                    <td><div className={styles.moderate}>moderate</div></td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Risk-Taking</td>
                    <td><div className={styles.high}>high</div></td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Teamwork</td>
                    <td><div className={styles.veryHigh}>very high</div></td>
                  </tr>
                  <tr>
                    <td className={styles.sectionHeader} colSpan={2}>
                      Information Processing & Decision-Making - "How I Think"
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Anchoring</td>
                    <td><div className={styles.low}>low</div></td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Confirmation</td>
                    <td><div className={styles.low}>low</div></td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Self-serving</td>
                    <td><div className={styles.low}>low</div></td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Overconfidence</td>
                    <td><div className={styles.low}>low</div></td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>Framing</td>
                    <td><div className={styles.low}>low</div></td>
                  </tr>
                  <tr>
                    <td className={styles.trait}>General Cognition</td>
                    <td><div className={styles.veryHigh}>very high</div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default BehavioralProfiles;
