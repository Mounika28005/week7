const CategoryList = () => {
  const categories = [
    {
      id: 1,
      name: 'Fruits',
      items: ['Apple', 'Banana', 'Orange', 'Grapes']
    },
    {
      id: 2,
      name: 'Vegetables',
      items: ['Carrot', 'Broccoli', 'Spinach', 'Potato']
    },
    {
      id: 3,
      name: 'Dairy',
      items: ['Milk', 'Cheese', 'Yogurt', 'Butter']
    }
  ];

  return (
    <div className="category-list-container">
      <h1>Categories and Items</h1>
      <div className="category-list">
        {categories.map(category => (
          <div key={category.id} className="category">
            <h2>{category.name}</h2>
            <ul>
              {category.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
