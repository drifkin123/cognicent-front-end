import Section from '../../components/common/Section';
import styles from './RiskAnalysis.module.css';

function RiskAnalysis() {
  return (
    <Section id="risk-analysis">
      <div className={styles.riskAnalysisSection}>
        <h2 className={styles.title}>
          Cognicit then normalizes assessed behaviors to inform risk analysis, comparisons, and make AI-informed recommendations
        </h2>
        
        <div className={styles.contentContainer}>
          {/* Department Risk Map Table */}
          <div className={styles.topTableWrapper}>
            <table className={styles.riskMapTable}>
              <thead>
                <tr>
                  <th className={styles.riskMapHeader}>Department<br/>Top Level Risk Map</th>
                  <th className={styles.riskMapHeader}>Average Patient<br/>Satisfaction</th>
                  <th className={styles.riskMapHeader}>Average Cognitive<br/>Capacity</th>
                  <th className={styles.riskMapHeader}>Problem<br/>Solving Skills</th>
                  <th className={styles.riskMapHeader}>Decision-Making<br/>Bias</th>
                  <th className={styles.riskMapHeader}>Judgment and<br/>Decision Making</th>
                  <th className={styles.riskMapHeader}>Sense of Personal<br/>Responsibility</th>
                  <th className={styles.riskMapHeader}>Teamwork</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.departmentCell}>Emergency Medicine</td>
                  <td className={styles.percentageCell}>35%</td>
                  <td><div className={styles.lowRisk}>Low</div></td>
                  <td><div className={styles.moderateRisk}>Moderate</div></td>
                  <td><div className={styles.criticalRisk}>Critical</div></td>
                  <td><div className={styles.highRisk}>High</div></td>
                  <td><div className={styles.highRisk}>High</div></td>
                  <td><div className={styles.criticalRisk}>Critical</div></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bottom Row with Profile and Recommendations */}
          <div className={styles.bottomRow}>
            {/* Job Risk Profile */}
            <div className={styles.profileSection}>
              <h3 className={styles.profileTitle}>Job Risk Profile: Your ER Physicians</h3>
              
              <div className={styles.dispositionSection}>
                <h4 className={styles.sectionTitle}>Disposition - "How I Feel"</h4>
                <table className={styles.profileTable}>
                  <tbody>
                    <tr>
                      <td className={styles.traitCell}>Openness</td>
                      <td className={styles.valueCell}>
                        <span className={styles.moderateValue}>Moderate</span>
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.traitCell}>Conscientiousness</td>
                      <td className={styles.valueCell}>
                        <span className={styles.lowValue}>Low</span>
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.traitCell}>Extraversion</td>
                      <td className={styles.valueCell}>
                        <span className={styles.highValue}>High</span>
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.traitCell}>Agreeableness</td>
                      <td className={styles.valueCell}>
                        <span className={styles.criticalValue}>Critical</span>
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.traitCell}>Personality Stability</td>
                      <td className={styles.valueCell}>
                        <span className={styles.criticalValue}>Critical</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recommendations Section */}
            <div className={styles.recommendationsSection}>
              <h3 className={styles.recommendationsTitle}>Highest Risk Assessment:</h3>
              <p className={styles.riskDescription}>
                In general, your ER Physicians are assessed as demonstrating <span className={styles.criticalText}>critical risk</span> in the areas of{' '}
                <span className={styles.blueText}>agreeableness</span> (empathy, willingness to work with others, kindness){' '}
                <span className={styles.blueText}>personality stability</span> (tendency towards negativity, high anxiety, irritability, moodiness), and confirmation bias
                (making decisions that confirm or support one's prior beliefs or values).
              </p>
              <p className={styles.viewLinks}>
                ( <span className={styles.link}>View by Department Lead</span> | <span className={styles.link}>View by Individual</span> )
              </p>

              <h4 className={styles.drillDownTitle}>Drill Down:</h4>
              <p className={styles.drillDownDescription}>
                In particular, your ER physical <span className={styles.blueText}>agreeableness</span> and <span className={styles.blueText}>bias</span> (which are related) exceed National
                averages at a level likely to heavily effect patient satisfaction.
              </p>
              <p className={styles.viewLinks}>
                ( <span className={styles.link}>View by Department Lead</span> | <span className={styles.link}>View by Individual</span> )
              </p>

              <h4 className={styles.recommendationsSubTitle}>Recommendations:</h4>
              <p className={styles.recommendationsLink}>
                <span className={styles.link}>View recommendations based on your specific hospital data »</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default RiskAnalysis;
