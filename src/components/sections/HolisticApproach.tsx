import Section from '../../components/common/Section';
import styles from './HolisticApproach.module.css';

function HolisticApproach() {
  const icons = [
    { src: "/images/cog-1.png", alt: "Cognicit Logo" },
    { src: "/images/cog-2.png", alt: "Cognicit Logo" },
    { src: "/images/cog-3.png", alt: "Cognicit Logo" },
    { src: "/images/cog-4.png", alt: "Cognicit Logo" },
    { src: "/images/cog-5.png", alt: "Cognicit Logo" },
    { src: "/images/cog-6.png", alt: "Cognicit Logo" },
    { src: "/images/cog-7.png", alt: "Cognicit Logo" },
  ];
  return (
    <Section id="opportunity">
      <div className={styles.opportunitySection}>
        <h1 className={styles.title}>The Opportunity</h1>
        <p className={styles.subtitle}>
          Cognicit uses a proven scientific assessment to identify, address, and improve the behavioral factors that lead to higher patient satisfaction and financial performance
        </p>

        <div className={styles.logoContainer}>
          <img src="/images/cog-big.png" alt="Cognicit Logo" />
        </div>

        <div className={styles.iconsGrid}>
          {icons.map((icon) => (
            <div className={styles.icon}>
              <img src={icon.src} alt={icon.alt} />
            </div>
          ))}


        </div>
      </div>
    </Section>
  );
}

export default HolisticApproach;


