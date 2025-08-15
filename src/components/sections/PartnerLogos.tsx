import Section from '../../components/common/Section';
import styles from './PartnerLogos.module.css';

function PartnerLogos() {
  return (
    <Section id="partners" title="Our Partners">
      <div className={styles.grid}>
        <img src="/images/cognicit_logo_horz_black.svg" alt="Cognicit" />
        <img src="/images/cognicit_logo_horz_cyan.svg" alt="Cognicit cyan" />
        <img src="/images/cognicit_logo_horz_white.svg" alt="Cognicit white" />
        <img src="/images/cognicit_logo_square_black.svg" alt="Cognicit square black" />
        <img src="/images/cognicit_logo_square_cyan.svg" alt="Cognicit square cyan" />
        <img src="/images/cognicit_logo_square_white.svg" alt="Cognicit square white" />
      </div>
    </Section>
  );
}

export default PartnerLogos;


