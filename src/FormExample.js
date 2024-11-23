const FormExample = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value, 
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();  
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <h2>Submit Form Example</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormExample;
