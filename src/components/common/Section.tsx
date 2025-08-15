import { ReactNode } from 'react';
import styles from './Section.module.css';

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
};

function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className={styles.section}>
      <div className="container">
        {title ? <h2 className="section-title">{title}</h2> : null}
        {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        {children}
      </div>
    </section>
  );
}

export default Section;


