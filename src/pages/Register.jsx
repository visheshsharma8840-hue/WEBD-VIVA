import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const initialUsers = [
  { id: 1, name: 'JASKARAN SINGH', email: 'lit2025038@iiitl.ac.in', phone: '+91-8209400071', cuisine: 'Punjab',      date: '2025-11-07' },
  { id: 2, name: 'RAHUL SINGH',    email: 'lit2025035@iiitl.ac.in', phone: '+91-8766012345', cuisine: 'North Indian', date: '2025-11-08' },
  { id: 3, name: 'AYAN BAG',       email: 'ayan399@gmail.com',      phone: '+91-9876543210', cuisine: 'West Bengal',  date: '2024-11-08' },
];

const whyJoin = [
  { icon: 'fa-user-friends', title: 'Community Access', desc: 'Join thousands of food lovers and home chefs.' },
  { icon: 'fa-award',        title: 'Expert Tips',      desc: 'Get exclusive cooking tips and tricks.' },
  { icon: 'fa-mobile-alt',   title: 'Mobile Friendly',  desc: 'Use this platform easily on any device.' },
  { icon: 'fa-heart',        title: 'Save Favorites',   desc: 'Bookmark the recipes you love for later.' },
];

const howItWorks = [
  { icon: 'fa-user-plus',     step: '1. Register',       desc: 'Create your free account and join our cooking community.' },
  { icon: 'fa-utensils',      step: '2. Browse Recipes', desc: "Explore hundreds of recipes across India's regional cuisines." },
  { icon: 'fa-heart',         step: '3. Save Favorites', desc: 'Apply and save your favourite recipes to cook later here.' },
];

const afterJoin = [
  { icon: 'fa-upload',       step: '4. Upload Your Recipes', desc: 'Share your kitchen secrets and inspire thousands of users.' },
  { icon: 'fa-comment-dots', step: '5. Leave Ratings',       desc: 'Rate and review recipes to help others cook better.' },
  { icon: 'fa-bell',         step: '6. Get Alerts',          desc: 'Receive new recipe recommendations based on your taste.' },
];

const faqs = [
  { q: 'Is registration free?',               a: 'Yes! Our platform is completely free for all users.' },
  { q: 'What happens after I register?',      a: 'You can browse recipes, apply/save recipes, and manage your saved list.' },
  { q: 'Why do you ask for Favorite Cuisine?', a: 'We use it to recommend recipes based on your taste preference.' },
];

export default function Register() {
  const [users, setUsers]   = useState(initialUsers);
  const [nextId, setNextId] = useState(4);
  const [toast, setToast]   = useState(false);

  const [form, setForm] = useState({
    fullName: '', email: '', password: '', phone: '', cuisine: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date().toISOString().split('T')[0];
    setUsers([...users, {
      id: nextId,
      name: form.fullName,
      email: form.email,
      phone: form.phone,
      cuisine: form.cuisine,
      date: today,
    }]);
    setNextId(nextId + 1);
    setForm({ fullName: '', email: '', password: '', phone: '', cuisine: '' });
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  return (
    <>
      <Navbar />

      {/* Toast */}
      {toast && (
        <div className="alert alert-success alert-custom" role="alert">
          <i className="fas fa-check-circle me-2"></i>Registration Successful!
        </div>
      )}

      {/* Why Join */}
      <section className="container mt-5">
        <h2 className="section-title">Why Join Us?</h2>
        <div className="row g-4">
          {whyJoin.map((w, i) => (
            <div className="col-lg-3 col-md-6 col-12" key={i}>
              <div className="recipe-card p-4 text-center">
                <i className={`fas ${w.icon} fa-2x mb-3`} style={{ color: '#ff4f4f' }}></i>
                <h4 className="recipe-title">{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="container">
        <h2 className="section-title">Join Our Community</h2>
        <div className="registration-section">
          <h3 className="text-center mb-4">User Registration</h3>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text" className="form-control" name="fullName"
                  placeholder="eg: Rohit Mehra" required
                  value={form.fullName} onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email" className="form-control" name="email"
                  placeholder="eg: infoeg@gmail.com" required
                  value={form.email} onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password" className="form-control" name="password" required
                  value={form.password} onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel" className="form-control" name="phone"
                  pattern="^\+?[0-9]*$" required
                  value={form.phone} onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Favorite Cuisine</label>
              <select className="form-control" name="cuisine" required value={form.cuisine} onChange={handleChange}>
                <option value="">Select...</option>
                <option value="Punjab">North Indian</option>
                <option value="West Bengal">South Indian</option>
                <option value="South India">Bengali Cuisine</option>
                <option value="North India">Rajasthani Food</option>
                <option value="Rajasthan">Maharashtrian Special</option>
              </select>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-lg btn-register">
                <i className="fas fa-user-plus me-2"></i>Register Now
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Users Table */}
      <section id="users" className="container">
        <h2 className="section-title">Registered Users</h2>
        <div className="table-section">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>ID</th><th>Name</th><th>Email</th>
                  <th>Phone</th><th>Favorite Cuisine</th><th>Registered Date</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id}>
                    <td>{u.id}</td><td>{u.name}</td><td>{u.email}</td>
                    <td>{u.phone}</td><td>{u.cuisine}</td><td>{u.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mt-5">
        <h2 className="section-title">How It Works</h2>
        <div className="row g-4 text-center">
          {howItWorks.map((h, i) => (
            <div className="col-md-4" key={i}>
              <div className="recipe-card p-4">
                <i className={`fas ${h.icon} fa-2x mb-3`} style={{ color: '#ff4f4f' }}></i>
                <h4 className="recipe-title">{h.step}</h4>
                <p>{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* After Joining */}
      <section className="container mt-5">
        <h2 className="section-title">What You Can Do After Joining</h2>
        <div className="row g-4 text-center">
          {afterJoin.map((a, i) => (
            <div className="col-md-4" key={i}>
              <div className="recipe-card p-4">
                <i className={`fas ${a.icon} fa-2x mb-3`} style={{ color: '#ff4f4f' }}></i>
                <h4 className="recipe-title">{a.step}</h4>
                <p>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="container mt-5 mb-5">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          {faqs.map((f, i) => (
            <div className={`accordion-item ${i > 0 ? 'mt-2' : ''}`} key={i}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${i !== 0 ? 'collapsed' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq${i}`}
                >
                  {f.q}
                </button>
              </h2>
              <div id={`faq${i}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`}>
                <div className="accordion-body">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
