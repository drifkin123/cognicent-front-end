import Section from '../../components/common/Section';

function WhyNotEffective() {
  return (
    <Section id="why-not-effective" title="Why isn't current bias training effective?">
      <div style={{ display: 'grid', gap: 'var(--space-5)' }}>
        <p style={{ fontSize: '1.1em', fontWeight: '500' }}>
          Current anti-bias training solutions are almost exclusively single-use, video-based trainings that fail to produce lasting behavioral change.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-5)' }}>
          <div style={{ padding: 'var(--space-4)', background: '#fff3cd', borderRadius: 'var(--radius-2)', border: '1px solid #ffeaa7' }}>
            <h4 style={{ margin: '0 0 var(--space-3)', color: '#856404' }}>Lack of Personalization</h4>
            <p style={{ margin: 0, fontSize: '0.9em' }}>One-size-fits-all approaches ignore individual cognitive patterns and institutional contexts</p>
          </div>
          
          <div style={{ padding: 'var(--space-4)', background: '#f8d7da', borderRadius: 'var(--radius-2)', border: '1px solid #f5c6cb' }}>
            <h4 style={{ margin: '0 0 var(--space-3)', color: '#721c24' }}>No Ongoing Support</h4>
            <p style={{ margin: 0, fontSize: '0.9em' }}>Single training sessions without follow-up or reinforcement mechanisms</p>
          </div>
          
          <div style={{ padding: 'var(--space-4)', background: '#d1ecf1', borderRadius: 'var(--radius-2)', border: '1px solid #bee5eb' }}>
            <h4 style={{ margin: '0 0 var(--space-3)', color: '#0c5460' }}>Limited Measurement</h4>
            <p style={{ margin: 0, fontSize: '0.9em' }}>No diagnostic assessment or progress tracking to measure actual bias reduction</p>
          </div>
        </div>
        
        <blockquote style={{ 
          fontSize: '1.2em', 
          fontStyle: 'italic', 
          padding: 'var(--space-5)', 
          margin: 'var(--space-5) 0',
          background: '#f8f9fa',
          borderLeft: '4px solid var(--color-accent)',
          borderRadius: 'var(--radius-2)'
        }}>
          "This is bias. It's bad. Don't be biased. Good luck."
        </blockquote>
        
        <p style={{ textAlign: 'center', fontWeight: '600', color: 'var(--color-accent-dark)' }}>
          Healthcare institutions need a systematic, evidence-based approach to diagnosing and reducing cognitive bias.
        </p>
      </div>
    </Section>
  );
}

export default WhyNotEffective;


