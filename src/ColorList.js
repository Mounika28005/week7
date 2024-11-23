

const ColorList = () => {

  const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange'];

  return (
    <div>
      <h1>Color List</h1>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
};

export default ColorList;
