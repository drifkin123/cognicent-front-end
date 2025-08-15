import styles from './FeatureCard.module.css';

type FeatureCardProps = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

function FeatureCard({ title, description, imageSrc, imageAlt }: FeatureCardProps) {
  return (
    <div className={styles.card}>
      {imageSrc ? (
        <div className={styles.media}>
          <img src={imageSrc} alt={imageAlt || ''} loading="lazy" />
        </div>
      ) : null}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </div>
  );
}

export default FeatureCard;


