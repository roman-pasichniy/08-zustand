import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>&copy; {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Roman Pasichniy</p>
          <p>
            Contact us: <a href="mailto:roman.pasichniy@gmail.com">roman.pasichniy@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
