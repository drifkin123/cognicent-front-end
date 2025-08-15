import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <img src="/images/cognicit_logo_horz_black.svg" alt="Cognicit" height={28} />
            <p className={styles.copy}>
              For more information, contact us via email using{' '}
              <a href="mailto:info@cognicit.com">info@cognicit.com</a>
            </p>
          </div>
          <div className={styles.legal}>
            <p>Copyright © 2024 Cognicit, LLC</p>
            <p>Copyright © 2002-2024, Pragmatic Solutions, Inc.</p>
            <p>Copyright © 2015-2024, simEd Holdings, LLC</p>
            <p>Copyright © 2020-2024, Research &amp; Assessment Design</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


