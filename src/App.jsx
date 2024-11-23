// import React from 'react';

// const UserTable = () => {
//   // Array of user objects with name and email
//   const users = [
//     { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
//     { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
//     { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
//     { id: 4, name: 'Bob Lee', email: 'bob.lee@example.com' }
//   ];

//   return (
//     <div className="user-table-container">
//       <h1>User Details</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* Mapping through the users array and creating a row for each user */}
//           {users.map(user => (
//             <tr key={user.id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserTable;


import React from 'react';

const CategoryList = () => {
  // Array of categories with items
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
        {/* Outer map for rendering categories */}
        {categories.map(category => (
          <div key={category.id} className="category">
            <h2>{category.name}</h2>
            <ul>
              {/* Inner map for rendering items within each category */}
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

// import React from 'react';

// const ColorList = () => {
//   const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange'];

//   return (
//     <div>
//       <h1>Color List</h1>
//       <ul>
//         {colors.map((color, index) => (
//           <li key={index}>{color}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ColorList;

// import React, { useState } from 'react';

// function ToggleText() {
//   // State to manage visibility of the text element
//   const [isVisible, setIsVisible] = useState(false);

//   // Function to toggle the visibility
//   const toggleVisibility = () => {
//     setIsVisible(!isVisible);
//   };

//   return (
//     <div>
//       {/* Button to toggle visibility */}
//       <button onClick={toggleVisibility}>
//         {isVisible ? 'Hide' : 'Show'} Text
//       </button>

//       {/* Conditionally render the text element based on the isVisible state */}
//       {isVisible && <p>This is the text that can be toggled!</p>}
//     </div>
//   );
// }

// export default ToggleText;

// import React from 'react';

// const TimeOfDayGreeting = () => {
//   const currentHour = new Date().getHours();  // Get the current hour (0-23)

//   // Determine the time of day and set an appropriate greeting
//   let greeting;

//   if (currentHour >= 5 && currentHour < 12) {
//     greeting = 'Good Morning!';
//   } else if (currentHour >= 12 && currentHour < 18) {
//     greeting = 'Good Afternoon!';
//   } else {
//     greeting = 'Good Evening!';
//   }

//   return (
//     <div>
//       <h1>{greeting}</h1>
//     </div>
//   );
// };

// export default TimeOfDayGreeting;

// import React, { useState } from 'react';

// const LoginLogout = () => {
//   // State to track if the user is logged in or not
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Function to handle login and logout
//   const handleLoginLogout = () => {
//     setIsLoggedIn((prevState) => !prevState);
//   };

//   return (
//     <div>
//       <button onClick={handleLoginLogout}>
//         {isLoggedIn ? 'Logout' : 'Login'}
//       </button>
//     </div>
//   );
// };

// export default LoginLogout;

// import React, { useState } from 'react';

// const Errormessage = () => {
//   // State to track if there's an error
//   const [hasError, setHasError] = useState(false);

//   // Function to simulate an error (you can replace this with real error handling)
//   const toggleError = () => {
//     setHasError(!hasError);
//   };

//   return (
//     <div>
//       <button onClick={toggleError}>
//         {hasError ? 'Clear Error' : 'Simulate Error'}
//       </button>

//       {/* Conditionally render error message */}
//       {hasError && (
//         <div style={{ color: 'red', marginTop: '10px' }}>
//           <strong>Error: Something went wrong!</strong>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Errormessage;


// import React, { useState } from 'react';

// const StatusMessage = () => {
//   // State to track the status
//   const [status, setStatus] = useState('idle'); // Possible values: 'idle', 'processing', 'success', 'error'

//   // Function to simulate different statuses
//   const simulateStatusChange = (newStatus) => {
//     setStatus(newStatus);
//   };

//   // Determine the status message based on the current status
//   let statusMessage;
//   switch (status) {
//     case 'processing':
//       statusMessage = <div style={{ color: 'blue' }}>Processing...</div>;
//       break;
//     case 'success':
//       statusMessage = <div style={{ color: 'green' }}>Success!</div>;
//       break;
//     case 'error':
//       statusMessage = <div style={{ color: 'red' }}>Error occurred!</div>;
//       break;
//     default:
//       statusMessage = <div style={{ color: 'gray' }}>Idle</div>;
//       break;
//   }

//   return (
//     <div>
//       <button onClick={() => simulateStatusChange('processing')}>Start Processing</button>
//       <button onClick={() => simulateStatusChange('success')}>Mark as Success</button>
//       <button onClick={() => simulateStatusChange('error')}>Trigger Error</button>
//       <button onClick={() => simulateStatusChange('idle')}>Reset</button>

//       {/* Conditionally render status message */}
//       {statusMessage}
//     </div>
//   );
// };

// export default StatusMessage;
// import React from 'react';

// const ButtonClick = () => {
//   // Function to handle button click
//   const handleClick = () => {
//     console.log("Button clicked!");
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// };

// export default ButtonClick;
// import React, { useState } from 'react';

// const Hover = () => {
//   // State to track if the box is hovered
//   const [isHovered, setIsHovered] = useState(false);

//   // Styles for the box
//   const boxStyle = {
//     width: '200px',
//     height: '200px',
//     backgroundColor: isHovered ? 'lightblue' : 'lightgray',
//     transition: 'background-color 0.3s ease',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//     border: '2px solid #000',
//   };

//   return (
//     <div
//       style={boxStyle}
//       onMouseEnter={() => setIsHovered(true)}  // When mouse enters, set hovered to true
//       onMouseLeave={() => setIsHovered(false)} // When mouse leaves, set hovered to false
//     >
//       Hover over me!
//     </div>
//   );
// };

// export default Hover;

// import React, { useState } from 'react';

// const InputForm = () => {
//   // State to store the input value
//   const [inputValue, setInputValue] = useState('');

//   // Handle input change
//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div>
//       <h2>Real-time Input Handling</h2>
//       <form>
//         <label>
//           Type something:
//           <input 
//             type="text" 
//             value={inputValue} 
//             onChange={handleInputChange}  // Updates the state as the user types
//             placeholder="Type here"
//           />
//         </label>
//       </form>

//       {/* Display the real-time input value */}
//       <p>You typed: {inputValue}</p>
//     </div>
//   );
// };

// export default InputForm;

// import React, { useState } from 'react';

// const FormExample = () => {
//   // State to store the form data
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//   });

//   // Handle input change
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,  // Dynamically update the correct field
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();  // Prevent the form from submitting and refreshing the page
//     console.log('Form data submitted:', formData);
//   };

//   return (
//     <div>
//       <h2>Submit Form Example</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             placeholder="Enter your name"
//           />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="Enter your email"
//           />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default FormExample;

// import React, { useState } from 'react';

// const DynamicButtons = () => {
//   // State to track the action message
//   const [actionMessage, setActionMessage] = useState('');

//   // Handle Add action
//   const handleAdd = () => {
//     setActionMessage('Item Added');
//   };

//   // Handle Edit action
//   const handleEdit = () => {
//     setActionMessage('Item Edited');
//   };

//   // Handle Delete action
//   const handleDelete = () => {
//     setActionMessage('Item Deleted');
//   };

//   return (
//     <div>
//       <h2>Dynamic Button Actions</h2>

//       {/* Buttons with different actions */}
//       <button onClick={handleAdd}>Add</button>
//       <button onClick={handleEdit}>Edit</button>
//       <button onClick={handleDelete}>Delete</button>

//       {/* Display the action message */}
//       <p>{actionMessage}</p>
//     </div>
//   );
// };

// export default DynamicButtons;
// import React, { useState } from 'react';

// const Counter = () => {
//   // State to track the counter value, initialized to 0
//   const [count, setCount] = useState(0);

//   // Handle increment action
//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   // Handle decrement action
//   const handleDecrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h2>Counter Application</h2>
//       <p>Current count: {count}</p>
      
//       {/* Buttons to increment and decrement */}
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//     </div>
//   );
// };

// export default Counter;
// import React, { useState } from 'react';

// function ToggleVisibility() {
//   // State to manage visibility
//   const [isVisible, setIsVisible] = useState(false);

//   // Toggle visibility function
//   const toggleVisibility = () => {
//     setIsVisible(!isVisible);
//   };

//   return (
//     <div>
//       <button onClick={toggleVisibility}>
//         {isVisible ? 'Hide' : 'Show'} Content
//       </button>

//       {/* Conditionally render the content */}
//       {isVisible && (
//         <>
//           <img src="https://via.placeholder.com/150" alt="Sample" />
//           <p>This is a paragraph of text.</p>
//         </>
//       )}
//     </div>
//   );
// }

// export default ToggleVisibility;
// import React, { useState } from 'react';

// const TextInputExample = () => {
//   // Step 1: Declare a state variable to hold the input value
//   const [inputValue, setInputValue] = useState('');

//   // Step 2: Handle input change to update the state
//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div>
//       {/* Step 3: Text input field, bound to the state */}
//       <input 
//         type="text" 
//         value={inputValue} 
//         onChange={handleChange} 
//         placeholder="Type something..." 
//       />
      
//       {/* Step 4: Display the input value dynamically */}
//       <p>You typed: {inputValue}</p>
//     </div>
//   );
// };

// export default TextInputExample;
// import React, { useState } from 'react';
// import './App.css'; // Import the CSS file for styling

// function App() {
//   // State to track the current theme
//   const [isDarkTheme, setIsDarkTheme] = useState(false);

//   // Toggle theme function
//   const toggleTheme = () => {
//     setIsDarkTheme(!isDarkTheme);
//   };

//   return (
//     <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
//       <button onClick={toggleTheme} className="theme-toggle-button">
//         Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
//       </button>

//       <h1>Welcome to my themed app!</h1>
//       <p>This is a simple app that toggles between light and dark themes.</p>
//     </div>
//   );
// }

// export default App;
// import React, { useRef } from 'react';

// const FocusInput = () => {
//   // Step 1: Create a reference for the input element
//   const inputRef = useRef(null);

//   // Step 2: Handle button click to focus the input
//   const focusInput = () => {
//     // Focus the input field using the current reference
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       {/* Input field with a ref attached */}
//       <input 
//         ref={inputRef} 
//         type="text" 
//         placeholder="Click the button to focus me!" 
//       />
      
//       {/* Button to trigger focusing the input */}
//       <button onClick={focusInput}>Focus the input</button>
//     </div>
//   );
// };

// export default FocusInput;
// import React, { useState, useRef, useEffect } from 'react';

// const CounterWithPreviousState = () => {
//   // Step 1: Declare state for the counter
//   const [count, setCount] = useState(0);

//   // Step 2: Declare useRef to hold the previous count value
//   const prevCountRef = useRef();

//   // Step 3: Update the ref value after each render (tracking previous state)
//   useEffect(() => {
//     prevCountRef.current = count;
//   }, [count]); // This effect runs whenever `count` changes

//   // Step 4: Get the previous count value from the ref
//   const prevCount = prevCountRef.current;

//   return (
//     <div>
//       <h1>Current Count: {count}</h1>
//       <h2>Previous Count: {prevCount !== undefined ? prevCount : 'N/A'}</h2>
      
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   );
// };

// export default CounterWithPreviousState;

// import React, { useState, useRef } from 'react';

// const Stopwatch = () => {
//   // Step 1: Declare state to track the time
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   // Step 2: Declare useRef to store the timer ID (setInterval reference)
//   const timerRef = useRef(null);

//   // Step 3: Start the stopwatch
//   const startTimer = () => {
//     if (isRunning) return; // Prevent starting the timer if it's already running
//     setIsRunning(true);

//     // Start the timer using setInterval
//     timerRef.current = setInterval(() => {
//       setTime((prevTime) => prevTime + 1);
//     }, 1000);
//   };

//   // Step 4: Stop the stopwatch
//   const stopTimer = () => {
//     clearInterval(timerRef.current);
//     setIsRunning(false);
//   };

//   // Step 5: Reset the stopwatch
//   const resetTimer = () => {
//     clearInterval(timerRef.current);
//     setTime(0);
//     setIsRunning(false);
//   };

//   return (
//     <div>
//       <h1>Stopwatch</h1>
//       <p>Time: {time} seconds</p>

//       <button onClick={startTimer} disabled={isRunning}>
//         Start
//       </button>
//       <button onClick={stopTimer} disabled={!isRunning}>
//         Stop
//       </button>
//       <button onClick={resetTimer}>
//         Reset
//       </button>
//     </div>
//   );
// };

// export default Stopwatch;

// import React, { useRef } from 'react';

// function UncontrolledInput() {
//   // Create a ref to store the input field value
//   const inputRef = useRef();

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page refresh
//     alert('Input Value: ' + inputRef.current.value); // Access the value using ref
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" ref={inputRef} /> {/* Attach ref to the input */}
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default UncontrolledInput;
// import React, { useRef } from 'react';

// function Scroll() {
//   // Create a ref for the section to scroll to
//   const sectionRef = useRef(null);

//   // Function to scroll to the section
//   const scrollToSection = () => {
//     // Use scrollIntoView to scroll the section into view
//     sectionRef.current.scrollIntoView({
//       behavior: 'smooth', // Smooth scrolling
//       block: 'start',     // Align to the top of the viewport
//     });
//   };

//   return (
//     <div>
//       {/* Button to scroll to the target section */}
//       <button onClick={scrollToSection}>Scroll to Section</button>

//       <div style={{ height: '100vh' }}>
//         <h1>Welcome to the page!</h1>
//         <p>Scroll down to see the target section.</p>
//       </div>

//       {/* The target section to scroll to */}
//       <div ref={sectionRef} style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
//         <h2>This is the section to scroll to!</h2>
//       </div>

//       <div style={{ height: '100vh' }}>
//         <h1>More content below...</h1>
//       </div>
//     </div>
//   );
// }

// export default Scroll;

// import React from 'react';

// // Importing the image from the assets folder
// import myImage from '../assets/myImage.jpg';

// function MyComponent() {
//   return (
//     <div>
//       <h1>Displaying an Image from the Assets Folder</h1>
//       {/* Display the image using the imported variable */}
//       <img src={myImage} alt="My Image" />
//     </div>
//   );
// }

// export default MyComponent;
// import React from 'react';

// const Image = () => {
//   // Array of image paths (can be URLs or relative paths)
//   const imagePaths = [
//     'https://th.bing.com/th/id/R.72622cad32cc934dc9036a2d27efed58?rik=dxLolcBlEoqT4g&riu=http%3a%2f%2fwww.hinduwikipedia.com%2fwp-content%2fuploads%2f2014%2f08%2flord-ganesha-wallpapers-ganesh-vinayar-chathurthi-6.jpg&ehk=99HItOx%2bMVIr4PVEZLjwNXt9d57iZPyBIXbCHJFpqHA%3d&risl=&pid=ImgRaw&r=0',
//     'https://i.pinimg.com/originals/37/da/59/37da5985b19d53da186d5afd8759ed7d.gif',
  
//   ];

//   return (
//     <div>
//       <h1>Image Gallery</h1>
//       <div className="image-gallery">
//         {imagePaths.map((path, index) => (
//           <img 
//             key={index} 
//             src={path} 
//             alt={`Image ${index + 1}`} 
//             style={{ width: '200px', margin: '10px' }} 
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Image;

// import React, { useState, useEffect, useRef } from 'react';

// const LazyImage = ({ src, alt, width, height }) => {
//   const [inView, setInView] = useState(false);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         if (entry.isIntersecting) {
//           setInView(true);
//           observer.disconnect(); // Stop observing once the image is in view
//         }
//       },
//       {
//         rootMargin: '100px', // Start loading the image before it's in the viewport
//       }
//     );
    
//     if (imageRef.current) {
//       observer.observe(imageRef.current);
//     }

//     return () => observer.disconnect(); // Cleanup observer on component unmount
//   }, []);

//   return (
//     <img
//       ref={imageRef}
//       src={inView ? src : ''}
//       alt={alt}
//       width={width}
//       height={height}
//     />
//   );
// };
// export default LazyImage;

// import React from 'react';
// import backgroundImage from 'https://www.bing.com/ck/a?!&&p=7652203e764c3ee9af7cae51776d07b846f6322d22abe4c1f8e910e3f6ad427eJmltdHM9MTczMjMyMDAwMA&ptn=3&ver=2&hsh=4&fclid=0eaed719-5223-6656-2bad-c212538e6782&u=a1L2ltYWdlcy9zZWFyY2g_Rk9STT1JQVJSVEgmcT1nYW5lc2hhJmlkPTRBQTM0QzVFQkM1RTc5QkRGM0VDRkY3MTYwQ0Q0RDk1REJBREUxNzM&ntb=1'; // Import the image

// const BackGround = () => {
//   return (
//     <div 
//       style={{
//         backgroundImage: `url(${backgroundImage})`, // Set the background image
//         backgroundSize: 'cover', // Ensure the image covers the whole div
//         backgroundPosition: 'center', // Center the image
//         width: '100%', // Set the width of the div
//         height: '400px' // Set the height of the div
//       }}
//     >
//       <h2 style={{ color: 'white', textAlign: 'center' }}>Hello, World!</h2>
//     </div>
//   );
// };

// export default BackGround;

// import React, { useState } from 'react';


// import lightImage from './https://th.bing.com/th?id=OSK.mmcolRkNJWZxtMlxZWIaIlDlh9R8wca6-aunRNa26fbKHYSc&w=200&h=200&c=7&rs=1&o=6&dpr=1.3&pid=SANGAM'; // Light mode image path
// import darkImage from './https://th.bing.com/th?id=OSK.HEROoGEPUtLRtZB7onIt-ephMaR-aMz_Vz-PRYqLrOCt62c&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM';  // Dark mode image path

// const ThemeImage = () => {
//   // State to manage the theme (light or dark)
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Function to toggle between light and dark mode
//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div>
//       {/* Button to toggle the theme */}
//       <button onClick={toggleTheme}>
//         Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
//       </button>

//       {/* Conditionally render the image based on the theme */}
//       <div
//         style={{
//           width: '300px',
//           height: '300px',
//           backgroundImage: `url(${isDarkMode ? darkImage : lightImage})`, // Switch image based on theme
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           marginTop: '20px',
//         }}
//       >
//         {/* You can also render other content or text */}
//       </div>
//     </div>
//   );
// };

// export default ThemeImage;

// import React, { useState, useRef, useEffect } from 'react';
// import './App3.css'; // You can style this as per your needs

// // Avatar component
// function Avatar({ user }) {
//   return <img src={`./"C:\Users\gorra\Downloads\img1.jpg"/${user}.png`} alt={`${user} Avatar`} className="avatar" />;
// }

// // Message List component
// function MessageList({ messages }) {
//   const endOfMessagesRef = useRef(null);

//   useEffect(() => {
//     // Automatically scroll to the latest message
//     endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   return (
//     <div className="message-list">
//       {messages.length === 0 ? (
//         <p>No messages yet</p>
//       ) : (
//         messages.map((message, index) => (
//           <div key={index} className="message-item">
//             <Avatar user={message.user} />
//             <p>{message.text}</p>
//           </div>
//         ))
//       )}
//       <div ref={endOfMessagesRef} />
//     </div>
//   );
// }

// // Message Input component
// function MessageInput({ inputValue, setInputValue, handleSendMessage }) {
//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputValue.trim()) {
//       handleSendMessage(inputValue);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="message-input">
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Type a message..."
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// }

// // Main App component
// function App3() {
//   const [messages, setMessages] = useState([]); // Tracks the messages
//   const [inputValue, setInputValue] = useState(''); // Tracks the input value

//   const handleSendMessage = (message) => {
//     const newMessage = {
//       text: message,
//       user: 'Manny', // Can replace with dynamic user names
//     };
//     setMessages([...messages, newMessage]);
//     setInputValue(''); // Clear the input field after sending the message
//   };

//   return (
//     <div className="chat-container">
//       <MessageList messages={messages} />
//       <MessageInput
//         inputValue={inputValue}
//         setInputValue={setInputValue}
//         handleSendMessage={handleSendMessage}
//       />
//     </div>
//   );
// }

// export default App3;



