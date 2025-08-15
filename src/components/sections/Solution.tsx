import Section from '../../components/common/Section';
import styles from './Solution.module.css';
import FeatureCard from '../../components/common/FeatureCard';

function Solution() {
  return (
    <Section id="solution" title="The Solution" subtitle="A comprehensive platform that blends diagnostic assessments and AI-driven simulations to systematically address cognitive bias in healthcare.">
      <div className={styles.grid}>
        <FeatureCard
          title="Diagnostic Assessments"
          description="Evidence-based validated assessments identify specific cognitive bias patterns across individuals, departments, and institutional levels to target interventions effectively."
          imageSrc="/images/notepages.svg"
          imageAlt="Diagnostic Assessments"
        />
        <FeatureCard
          title="AI-Driven Simulations"
          description="Adaptive, personalized simulation experiences designed to address diagnosed bias patterns through realistic healthcare scenarios and decision-making exercises."
          imageSrc="/images/iceberg.svg"
          imageAlt="AI Simulations"
        />
        <FeatureCard
          title="Analytics & Reporting"
          description="Comprehensive trend analysis and reporting dashboards provide actionable insights for institutional decision-making and progress monitoring."
          imageSrc="/images/hospital.svg"
          imageAlt="Analytics Dashboard"
        />
      </div>
      
      <div style={{ 
        marginTop: 'var(--space-7)', 
        padding: 'var(--space-6)', 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        borderRadius: 'var(--radius-2)',
        textAlign: 'center'
      }}>
        <h3 style={{ 
          margin: '0 0 var(--space-4)', 
          color: 'var(--color-accent-dark)',
          fontFamily: '"Playfair Display", Georgia, serif'
        }}>
          Transform Your Institution's Approach to Bias Reduction
        </h3>
        <p style={{ margin: '0 0 var(--space-4)', fontSize: '1.1em' }}>
          Platform licensing, training, and customization for medium to large healthcare institutions
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contact" className="btn">Request Demo</a>
          <a href="#technology" className="btn" style={{backgroundColor: 'transparent', color: 'var(--color-accent)', border: '2px solid var(--color-accent)'}}>
            Learn More
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Solution;


