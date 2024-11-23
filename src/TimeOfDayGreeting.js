const TimeOfDayGreeting = () => {
  const currentHour = new Date().getHours();  
  let greeting;

  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Good Morning!';
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'Good Afternoon!';
  } else {
    greeting = 'Good Evening!';
  }

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default TimeOfDayGreeting;
