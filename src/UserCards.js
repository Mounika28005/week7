

const UserCards = () => {
  const users = [
    { id: 1, name: 'Ganesha1', profilePic: 'https://th.bing.com/th?id=OIP.du-TYcr0DVxQQnXbtU9EZAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
    { id: 2, name: 'Ganesha2', profilePic: 'https://th.bing.com/th/id/OIP.X6vr8Lp0afde-cadYy1hOwHaFj?rs=1&pid=ImgDetMain' },
  ];

  return (
    <div className="user-cards-container">
      <h1>User Cards</h1>
      <div className="card-list">
        {users.map(user => (
          <div className="card" key={user.id}>
            <img className="profile-pic" src={user.profilePic} alt={user.name} />
            <h2>{user.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCards;

