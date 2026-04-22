import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';

const allRecipes = [
  {
    id: 'rajma',
    name: 'Rajma Chawal',
    time: 45,
    servings: 4,
    image: 'https://masalaandchai.com/wp-content/uploads/2025/09/Rajma-Masala.jpg',
    description: 'Spiced kidney bean curry served with steamed basmati rice.',
    cuisine: 'North India',
    difficulty: 'Easy',
    type: 'Vegetarian',
  },
  {
    id: 'palak',
    name: 'Palak Paneer',
    time: 30,
    servings: 4,
    image: 'https://healthynibblesandbits.com/wp-content/uploads/2020/01/Saag-Paneer-FF.jpg',
    description: 'Creamy spinach gravy cooked with soft paneer cubes.',
    cuisine: 'North India',
    difficulty: 'Medium',
    type: 'Vegetarian',
  },
  {
    id: 'biryani',
    name: 'Chicken Biryani',
    time: 90,
    servings: 4,
    image: 'https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg',
    description: 'Fragrant basmati rice layered with spiced marinated chicken, cooked slowly with saffron.',
    cuisine: 'South India',
    difficulty: 'Hard',
    type: 'Non-Vegetarian',
  },
  {
    id: 'pavbhaji',
    name: 'Pav Bhaji',
    time: 30,
    servings: 4,
    image: 'https://assets.bonappetit.com/photos/63cb14735125107865c0fe8f/1:1/w_2384,h_2384,c_limit/012023-pav-bhaji-lede.jpg',
    description: 'Spiced vegetable mash served with buttered pav.',
    cuisine: 'Maharashtra',
    difficulty: 'Easy',
    type: 'Vegetarian',
  },
  {
    id: 'sandesh',
    name: 'Sandesh',
    time: 30,
    servings: 3,
    image: 'https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/chitrangada-kundu147313705757ce49a1c0056.jpeg',
    description: 'Delicate Bengali sweet made from fresh paneer.',
    cuisine: 'West Bengal',
    difficulty: 'Medium',
    type: 'Vegetarian',
  },
  {
    id: 'chhole',
    name: 'Chhole Bhature',
    time: 40,
    servings: 2,
    image: 'https://thewhiskaddict.com/wp-content/uploads/2024/08/IMG_0727-4-scaled.jpg',
    description: 'Spicy chickpea curry served with fried bhature.',
    cuisine: 'Punjab',
    difficulty: 'Medium',
    type: 'Vegetarian',
  },
];

const popularCategories = [
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdm2WEvdeCYKsdfcxy1drlrx57eF65mxHNYA&s', title: 'Rajasthani' },
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqcHPqeel_jGEooO4XZoeBswuxs6-U_khGWA&s', title: 'North Indian' },
  { img: 'https://imgmediagumlet.lbb.in/media/2024/12/6763c390ad5b133601d57eed_1734591376530.jpg',       title: 'South Indian' },
  { img: 'https://dt4l9bx31tioh.cloudfront.net/eazymedia/eazytrendz/3108/trend20210413160402.jpg?width=750&height=436&mode=crop', title: 'Bengali Cuisine' },
];

export default function Recipes() {
  const [search, setSearch]         = useState('');
  const [filterCuisine, setCuisine] = useState('');
  const [filterTime, setTime]       = useState('');
  const [filterDiff, setDiff]       = useState('');
  const [filterType, setType]       = useState('');
  const [modalRecipe, setModalRecipe] = useState(null);
  const [noteText, setNoteText]     = useState('');
  const [toastMsg, setToastMsg]     = useState('');

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  const handleApply = (name) => {
    setModalRecipe(name);
    setNoteText('');
    const modal = new window.bootstrap.Modal(document.getElementById('recipeModal'));
    modal.show();
  };

  const handleConfirm = () => {
    const modal = window.bootstrap.Modal.getInstance(document.getElementById('recipeModal'));
    modal.hide();
    showToast(`"${modalRecipe}" saved to your collection! 🎉`);
  };

  const filtered = allRecipes.filter((r) => {
    const q = search.toLowerCase();
    if (q && !r.name.toLowerCase().includes(q) && !r.cuisine.toLowerCase().includes(q)) return false;
    if (filterCuisine && r.cuisine !== filterCuisine) return false;
    if (filterDiff && r.difficulty !== filterDiff) return false;
    if (filterType && r.type !== filterType) return false;
    if (filterTime === '30 mins' && r.time > 30) return false;
    if (filterTime === '30-60 mins' && (r.time <= 30 || r.time > 60)) return false;
    if (filterTime === '> 60 mins' && r.time <= 60) return false;
    return true;
  });

  return (
    <>
      <Navbar />

      {/* Toast */}
      {toastMsg && (
        <div className="alert alert-success alert-custom" role="alert">
          <i className="fas fa-check-circle me-2"></i>{toastMsg}
        </div>
      )}

      {/* Search & Filters */}
      <section id="recipes" className="container mt-5">
        <h2 className="section-title">Explore Recipes</h2>

        <div className="row mb-4">
          <div className="col-md-8 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name, cuisine, ingredient..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="row g-3 mb-4">
          <div className="col-md-3">
            <select className="form-control" value={filterCuisine} onChange={(e) => setCuisine(e.target.value)}>
              <option value="">Cuisine</option>
              <option value="Punjab">North Indian</option>
              <option value="West Bengal">South Indian</option>
              <option value="South India">Bengali Cuisine</option>
              <option value="North India">Rajasthani Food</option>
              <option value="Rajasthan">Maharashtrian Special</option>
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-control" value={filterTime} onChange={(e) => setTime(e.target.value)}>
              <option value="">Cooking Time</option>
              <option>30 mins</option>
              <option>30-60 mins</option>
              <option>{'> 60 mins'}</option>
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-control" value={filterDiff} onChange={(e) => setDiff(e.target.value)}>
              <option value="">Difficulty</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-control" value={filterType} onChange={(e) => setType(e.target.value)}>
              <option value="">Type</option>
              <option>Vegetarian</option>
              <option>Non-Vegetarian</option>
            </select>
          </div>
        </div>

        {/* Popular Categories */}
        <h3 className="section-title mt-4">Popular Categories</h3>
        <div className="d-flex overflow-auto pb-3" style={{ gap: '20px' }}>
          {popularCategories.map((c, i) => (
            <div key={i} className="recipe-card text-center flex-shrink-0" style={{ width: '300px' }}>
              <img src={c.img} alt={c.title} />
              <div className="recipe-card-body">
                <h4 className="recipe-title">{c.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="container mt-4">
        <h2 className="section-title">Featured Recipes</h2>
        {filtered.length === 0 ? (
          <div className="text-center py-5">
            <i className="fas fa-search fa-3x mb-3 text-white"></i>
            <p className="text-white fs-5">No recipes found. Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="row">
            {filtered.map((r) => (
              <RecipeCard
                key={r.id}
                name={r.name}
                time={r.time}
                servings={r.servings}
                image={r.image}
                description={r.description}
                onApply={handleApply}
              />
            ))}
          </div>
        )}
      </section>

      {/* Apply Recipe Modal */}
      <div className="modal fade" id="recipeModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                <i className="fas fa-utensils me-2"></i>Recipe Application
              </h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <h4 className="mb-3">{modalRecipe}</h4>
              <p>You're about to save this recipe to your collection!</p>
              <div className="mb-3">
                <label className="form-label">Add a personal note (optional):</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="e.g., Want to try this for dinner..."
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-register" onClick={handleConfirm}>
                <i className="fas fa-check me-2"></i>Confirm
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
