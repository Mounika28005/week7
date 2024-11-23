const GroceryList = () => {
  const groceryItems = ['Milk', 'Eggs', 'Bread', 'Butter', 'Cheese'];

  return (
    <div>
      <h1>Grocery List</h1>
      <ul>
        {groceryItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
