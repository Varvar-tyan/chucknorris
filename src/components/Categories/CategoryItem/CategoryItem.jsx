const CategoryItem = ({category, setJoke}) => {
    return (
        <div className="category-item" onClick={() => setJoke(category)}>
            <span>{category}</span>
        </div>
    )
}

export default CategoryItem;
