import CategoryItem from './CategoryItem/CategoryItem';

const Categories = ({categories, setJoke}) => {
    return (
        <div className="container">
        <div className="categories-container">
          <h1>Categories</h1>
          <div className="category-items">
            {categories?.map((category) => <CategoryItem key={category} category={category} setJoke={setJoke} />)}
          </div>
        </div>
      </div>
    )
}

export default Categories;
