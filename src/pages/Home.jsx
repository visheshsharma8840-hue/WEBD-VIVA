import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const categories = [
  {
    img: 'https://masalaandchai.com/wp-content/uploads/2025/02/Paneer-Butter-Masala.jpg',
    title: 'North Indian',
    desc: 'Aromatic curries, butter-rich gravies and royal flavors.',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_X_Y9KjeDdINj5Lbb-1kAFtab484d8tDlg&s',
    title: 'South Indian',
    desc: 'Dosa, idli, sambhar and coconut-infused delicacies.',
  },
  {
    img: 'https://i0.wp.com/paattiskitchen.com/wp-content/uploads/2023/01/kmc_20230110_142103-1.jpg?resize=1024%2C576&ssl=1',
    title: 'Bengali Cuisine',
    desc: 'Delicious fish curries, sweets and authentic spices.',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLJpFee-HSJrWJoxc_uwrQRAZhkM4ThyN9xw&s',
    title: 'Rajasthani Foods',
    desc: 'Dal Baati Churma, Gatte ki Sabzi and bold flavors.',
  },
];

const whyUs = [
  { icon: 'fa-book',       title: '1000+ Recipes',   desc: 'Explore verified, easy-to-follow recipes across India.' },
  { icon: 'fa-list-check', title: 'Step-by-Step',    desc: 'Beginner-friendly instructions for perfect cooking.' },
  { icon: 'fa-leaf',       title: 'Healthy Options', desc: 'Many low-oil, high-nutrition and balanced recipes.' },
  { icon: 'fa-users',      title: 'Community Loved', desc: 'Recipes cooked, reviewed and loved by real users.' },
];

const testimonials = [
  { quote: '"Love the Chicken Biriyani recipe! It turned out so good."', author: '– Abir' },
  { quote: '"Very easy instructions for beginners. Amazing website!"',   author: '– Rahul' },
  { quote: '"Great variety and well-organized categories. Loved it!"',   author: '– Jaskaran' },
];

const slides = [
  {
    img: 'https://thumbs.dreamstime.com/b/generated-image-upscaled-gigapixel-v-model-standard-denoise-sharpen-decompression-406873667.jpg',
    title: 'Welcome to Delicious Recipes',
    sub: 'Discover thousands of recipes from different parts of India',
  },
  {
    img: 'https://www.abbott.in/content/dam/corp/abbott/en-in/articles/india/_604811.jpg',
    title: 'Healthy & Nutritious',
    sub: 'Find recipes that match your dietary preferences',
  },
  {
    img: 'https://theindia.restaurant/wp-content/uploads/2025/02/indian-food.jpg',
    title: 'Easy to Follow',
    sub: 'Step-by-step instructions for perfect results',
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Carousel */}
      <section id="home" className="carousel-section">
        <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                data-bs-target="#recipeCarousel"
                data-bs-slide-to={i}
                className={i === 0 ? 'active' : ''}
              />
            ))}
          </div>
          <div className="carousel-inner">
            {slides.map((s, i) => (
              <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                <img src={s.img} alt={s.title} />
                <div className="carousel-caption">
                  <h1>{s.title}</h1>
                  <p>{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#recipeCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#recipeCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      {/* Trending Categories */}
      <section id="categories" className="container mt-5">
        <h2 className="section-title">Trending Categories</h2>
        <div className="row g-4">
          {categories.map((c, i) => (
            <div className="col-md-3" key={i}>
              <div className="recipe-card text-center">
                <img src={c.img} alt={c.title} />
                <div className="recipe-card-body">
                  <h4 className="recipe-title">{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="container mt-5">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="row g-4 text-center">
          {whyUs.map((w, i) => (
            <div className="col-md-3" key={i}>
              <div className="recipe-card p-4">
                <i className={`fas ${w.icon} fa-2x mb-3`} style={{ color: '#ff4f4f' }}></i>
                <h4 className="recipe-title">{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container mt-5">
        <h2 className="section-title">What Our Users Say</h2>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((t, i) => (
              <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''} text-center`}>
                <div className="recipe-card p-4">
                  <p className="mb-3">{t.quote}</p>
                  <h5 className="recipe-title">{t.author}</h5>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
