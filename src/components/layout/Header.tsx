import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.row}>
          <a href="#main" className="visually-hidden">Skip to content</a>
          <a className={styles.brand} href="#top" aria-label="Cognicit Home">
            <img src="/images/cognicit_logo_horz_cyan.svg" alt="Cognicit" height={36} />
          </a>
          <nav className={styles.nav} aria-label="Primary">
            <a href="#problem">Problem</a>
            <a href="#solution">Solution</a>
            <a href="#technology">Technology</a>
            <a href="#difference">Platform</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;


