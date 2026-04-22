import { Link } from 'react-router-dom';

const teamMembers = [
  { name: 'ABIR DAS',              url: 'https://www.linkedin.com/in/abir-das-589a22378' },
  { name: 'BINOY MONDAL',          url: 'https://www.linkedin.com/in/binoy-mondal-361065381/' },
  { name: 'RAHUL SINGH',           url: 'https://www.linkedin.com/in/rahul-singh-a8a089381' },
  { name: 'JASKARAN SINGH',        url: 'https://www.linkedin.com/in/jaskaran-singh-06010b381' },
  { name: 'AYAN BAG',              url: 'https://www.linkedin.com/in/ayan-bag-959061381' },
  { name: 'AMISHKA SISODIA',       url: 'https://www.linkedin.com/in/amishka-sisodiya-9a4019381' },
  { name: 'SAPNA KUMARI',          url: 'https://www.linkedin.com/in/aryan-kumar-a70034295' },
  { name: 'SHREYANSH KUMAR SINGH', url: 'https://www.linkedin.com/in/shreyansh-kumar-singh-b35101381' },
  { name: 'VISHESH KUMAR SHARMA',  url: 'https://www.linkedin.com/in/vishesh-kumar-sharma-722b872a9' },
  { name: 'ARYAN KUMAR',           url: 'https://www.linkedin.com/in/aryan-kumar-a70034295' },
];

export default function Footer() {
  return (
    <footer id="about">
      <div className="container">
        <div className="row">
          {/* Brand */}
          <div className="col-md-3 mb-4">
            <h5><i className="fas fa-utensils me-2"></i>Delicious Recipes</h5>
            <p>Your ultimate destination for discovering and sharing amazing recipes from different parts of India.</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="https://www.instagram.com/itisabir2006/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/recipes">Recipes</Link>
              <Link to="/register">Register</Link>
              <a href="#about">About Us</a>
            </div>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>
            <div className="footer-links">
              <a href="mailto:info@deliciousrecipes.com">
                <i className="fas fa-envelope me-2"></i>info@deliciousrecipes.com
              </a>
              <a href="tel:+911234567890">
                <i className="fas fa-phone me-2"></i>+91 1234567890
              </a>
              <a href="#">
                <i className="fas fa-map-marker-alt me-2"></i>Chatori Galli, Lucknow
              </a>
            </div>
          </div>

          {/* Team */}
          <div className="col-md-3 mb-4 team-mate">
            <h5>Team Members</h5>
            <div className="footer-links">
              {teamMembers.map((m, i) => (
                <a key={i} href={m.url} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-square-linkedin me-1"></i>{m.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
        <div className="text-center py-3">
          <p className="mb-0">&copy; 2025 Delicious Recipes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
