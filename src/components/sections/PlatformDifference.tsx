import Section from '../../components/common/Section';

function PlatformDifference() {
  return (
    <Section id="difference" title="The Cognicit Platform Difference">
      <div style={{ display: 'grid', gap: 'var(--space-7)' }}>
        <p style={{ fontSize: '1.2em', textAlign: 'center', fontWeight: '500', maxWidth: '800px', margin: '0 auto' }}>
          Unlike traditional one-size-fits-all training programs, Cognicit delivers a systematic, evidence-based approach to cognitive bias reduction.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 'var(--space-6)', alignItems: 'center' }}>
          {/* Traditional Approach */}
          <div style={{ padding: 'var(--space-5)', background: '#fff', border: '2px solid #dee2e6', borderRadius: 'var(--radius-2)' }}>
            <h3 style={{ color: '#6c757d', margin: '0 0 var(--space-4)', textAlign: 'center' }}>Traditional Approach</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ padding: 'var(--space-2) 0', borderBottom: '1px solid #f8f9fa' }}>❌ One-time video training</li>
              <li style={{ padding: 'var(--space-2) 0', borderBottom: '1px solid #f8f9fa' }}>❌ Generic content for all users</li>
              <li style={{ padding: 'var(--space-2) 0', borderBottom: '1px solid #f8f9fa' }}>❌ No diagnostic assessment</li>
              <li style={{ padding: 'var(--space-2) 0', borderBottom: '1px solid #f8f9fa' }}>❌ No progress tracking</li>
              <li style={{ padding: 'var(--space-2) 0' }}>❌ Limited institutional insights</li>
            </ul>
          </div>
          
          {/* VS */}
          <div style={{ 
            background: 'var(--color-accent)', 
            color: 'white', 
            padding: 'var(--space-3) var(--space-4)', 
            borderRadius: '50px',
            fontSize: '1.2em',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            VS
          </div>
          
          {/* Cognicit Approach */}
          <div style={{ padding: 'var(--space-5)', background: 'linear-gradient(135deg, #e3f2fd 0%, #f8f9fa 100%)', border: '2px solid var(--color-accent)', borderRadius: 'var(--radius-2)' }}>
            <h3 style={{ color: 'var(--color-accent)', margin: '0 0 var(--space-4)', textAlign: 'center' }}>Cognicit Approach</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ padding: 'var(--space-2) 0', borderBottom: '1px solid rgba(0,188,212,0.1)' }}>✅ Diagnostic bias assessment</li>
              <li style={{ padding: 'var(--space-2) 0', borderBottom: '1px solid rgba(0,188,212,0.1)' }}>✅ Personalized AI simulations</li>
              <li style={{ padding: 'var(--space-2) 0', borderBottom: '1px solid rgba(0,188,212,0.1)' }}>✅ Ongoing measurement & tracking</li>
              <li style={{ padding: 'var(--space-2) 0', borderBottom: '1px solid rgba(0,188,212,0.1)' }}>✅ Targeted interventions</li>
              <li style={{ padding: 'var(--space-2) 0' }}>✅ Comprehensive reporting</li>
            </ul>
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-5)' }}>
          <div style={{ textAlign: 'center', padding: 'var(--space-4)' }}>
            <div style={{ fontSize: '2.5em', marginBottom: 'var(--space-2)' }}>🎯</div>
            <h4 style={{ margin: '0 0 var(--space-2)', color: 'var(--color-accent)' }}>Targeted</h4>
            <p style={{ margin: 0, fontSize: '0.9em' }}>Interventions based on individual bias patterns</p>
          </div>
          
          <div style={{ textAlign: 'center', padding: 'var(--space-4)' }}>
            <div style={{ fontSize: '2.5em', marginBottom: 'var(--space-2)' }}>📈</div>
            <h4 style={{ margin: '0 0 var(--space-2)', color: 'var(--color-accent)' }}>Measurable</h4>
            <p style={{ margin: 0, fontSize: '0.9em' }}>Track progress with validated metrics</p>
          </div>
          
          <div style={{ textAlign: 'center', padding: 'var(--space-4)' }}>
            <div style={{ fontSize: '2.5em', marginBottom: 'var(--space-2)' }}>🔄</div>
            <h4 style={{ margin: '0 0 var(--space-2)', color: 'var(--color-accent)' }}>Continuous</h4>
            <p style={{ margin: 0, fontSize: '0.9em' }}>Ongoing reinforcement and improvement</p>
          </div>
          
          <div style={{ textAlign: 'center', padding: 'var(--space-4)' }}>
            <div style={{ fontSize: '2.5em', marginBottom: 'var(--space-2)' }}>🏥</div>
            <h4 style={{ margin: '0 0 var(--space-2)', color: 'var(--color-accent)' }}>Institutional</h4>
            <p style={{ margin: 0, fontSize: '0.9em' }}>Organization-wide insights and reporting</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default PlatformDifference;


