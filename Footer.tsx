const Footer = () => {
  return (
    <footer className="movie-footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3 className="marquee-title">🎥 Movies 🎥</h3>
          <p>El lugar donde la magia del cine cobra vida.</p>
          <ul>
            <li><a href="/about">Sobre nosotros</a></li>
            <li><a href="/contact">Contáctanos</a></li>
            <li><a href="/privacy">Política de privacidad</a></li>
          </ul>
        </div>
        <div className="footer-design">
          <div className="film-reel">
            <div className="reel"></div>
            <div className="film"></div>
          </div>
        </div>
      </div>
      <p className="footer-credit">
        &copy; 2024 Movies. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
