import Section from '../../components/common/Section';

function TechnologyOverview() {
  return (
    <Section id="technology" title="Technology Overview">
      <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
        <p style={{ fontSize: '1.2em', textAlign: 'center', fontWeight: '500' }}>
          The Cognicit platform leverages cutting-edge technology to deliver personalized bias reduction interventions at scale.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--space-6)' }}>
          <div style={{ padding: 'var(--space-5)', background: '#fff', borderRadius: 'var(--radius-2)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: 'var(--color-accent)', margin: '0 0 var(--space-3)' }}>🧠 Validated Assessments</h3>
            <p>Evidence-based psychometric tools measure cognitive bias patterns across multiple dimensions including anchoring, confirmation bias, and representativeness heuristics.</p>
          </div>
          
          <div style={{ padding: 'var(--space-5)', background: '#fff', borderRadius: 'var(--radius-2)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: 'var(--color-accent)', margin: '0 0 var(--space-3)' }}>🤖 Adaptive AI Engine</h3>
            <p>Machine learning algorithms personalize simulation experiences based on individual assessment results and performance patterns to maximize learning outcomes.</p>
          </div>
          
          <div style={{ padding: 'var(--space-5)', background: '#fff', borderRadius: 'var(--radius-2)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: 'var(--color-accent)', margin: '0 0 var(--space-3)' }}>📊 Analytics Platform</h3>
            <p>Real-time dashboards and reporting tools aggregate data across individuals and departments to identify trends and measure institutional progress.</p>
          </div>
          
          <div style={{ padding: 'var(--space-5)', background: '#fff', borderRadius: 'var(--radius-2)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: 'var(--color-accent)', margin: '0 0 var(--space-3)' }}>🔒 HIPAA Compliant</h3>
            <p>Enterprise-grade security and privacy controls ensure all assessment and simulation data meets healthcare industry compliance requirements.</p>
          </div>
          
          <div style={{ padding: 'var(--space-5)', background: '#fff', borderRadius: 'var(--radius-2)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: 'var(--color-accent)', margin: '0 0 var(--space-3)' }}>⚡ Cloud-Native</h3>
            <p>Scalable web application architecture supports institutions from 100 to 10,000+ users with reliable performance and uptime.</p>
          </div>
          
          <div style={{ padding: 'var(--space-5)', background: '#fff', borderRadius: 'var(--radius-2)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: 'var(--color-accent)', margin: '0 0 var(--space-3)' }}>🔗 Integration Ready</h3>
            <p>API-first design enables seamless integration with existing LMS, HRIS, and other institutional systems for streamlined deployment.</p>
          </div>
        </div>
        
        <div style={{ 
          background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)',
          color: 'white',
          padding: 'var(--space-6)',
          borderRadius: 'var(--radius-2)',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0 0 var(--space-3)', fontSize: '1.5em' }}>Platform Delivery Model</h3>
          <p style={{ margin: '0', fontSize: '1.1em' }}>
            Delivered as a SaaS web application with comprehensive licensing, training, and customization packages for healthcare institutions.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default TechnologyOverview;


