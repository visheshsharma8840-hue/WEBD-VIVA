export default function RecipeCard({ name, time, servings, image, description, onApply }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="recipe-card">
        <img src={image} alt={name} />
        <div className="recipe-card-body">
          <h3 className="recipe-title">{name}</h3>
          <div className="recipe-meta">
            <i className="fas fa-clock me-1"></i>{time} mins &nbsp;|&nbsp;
            <i className="fas fa-user me-1"></i>{servings} servings
          </div>
          <p>{description}</p>
          <button
            className="btn btn-apply"
            style={{ backgroundColor: '#ff4f4f', color: 'white' }}
            onClick={() => onApply && onApply(name)}
          >
            <i className="fas fa-heart me-2"></i>Apply Recipe
          </button>
        </div>
      </div>
    </div>
  );
}
