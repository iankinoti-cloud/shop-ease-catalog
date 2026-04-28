function FilterBar({ categories, activeCategory, onFilterChange }) {
  return (
    <div className="filter-bar">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
