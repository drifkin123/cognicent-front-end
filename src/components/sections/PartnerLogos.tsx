import Section from '../../components/common/Section';
import styles from './PartnerLogos.module.css';

function PartnerLogos() {
  return (
    <Section id="partners" title="">
      <div className={styles.collaboration}>
        <p className={styles.description}>
          Cognicit is a collaboration between partners sharing expertise and insight in 
          assessment, complex systems design, AI, machine learning, and simulation 
          technologies in PK-20 education and workforce development.
        </p>
        <p className={styles.description}>
          With projects and research spanning 30 years and multiple continents, 
          Cognicit's team members represent the highest caliber of talent across 
          diverse domains with the capacity to investigate and design solutions to 
          investigate the world's most pressing questions in cognition, social and 
          emotional capacity, cultural competence, equity, and much more.
        </p>
      </div>
      <div className={styles.logos}>
        <div className={styles.logo}>
          <img src="/images/pmatic.avif" alt="Pragmatic Solutions" className={styles.logoImage} />
        </div>
        <div className={styles.logo}>
          <img src="/images/simed.avif" alt="simEd Holdings" className={styles.logoImage} />
        </div>
        <div className={styles.logo}>
          <img 
            src="/images/RAD.svg" 
            alt="Research & Assessment Design" 
            className={styles.logoImage}
            style={{ minHeight: '60px', minWidth: '120px' }}
          />
        </div>
      </div>
    </Section>
  );
}

export default PartnerLogos;


