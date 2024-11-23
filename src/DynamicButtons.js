const DynamicButtons = () => {
  const [actionMessage, setActionMessage] = useState('');

  const handleAdd = () => {
    setActionMessage('Item Added');
  };
  const handleEdit = () => {
    setActionMessage('Item Edited');
  };
  const handleDelete = () => {
    setActionMessage('Item Deleted');
  };

  return (
    <div>
      <h2>Dynamic Button Actions</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <p>{actionMessage}</p>
    </div>
  );
};

export default DynamicButtons;
