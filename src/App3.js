import './App3.css'; 
function Avatar({ user }) {
  return <img src={`./assets/${user}.png`} alt={`${user} Avatar`} className="avatar" />;
}

function MessageList({ messages }) {
  const endOfMessagesRef = useRef(null);

  useEffect(() => {

    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="message-list">
      {messages.length === 0 ? (
        <p>No messages yet</p>
      ) : (
        messages.map((message, index) => (
          <div key={index} className="message-item">
            <Avatar user={message.user} />
            <p>{message.text}</p>
          </div>
        ))
      )}
      <div ref={endOfMessagesRef} />
    </div>
  );
}

function MessageInput({ inputValue, setInputValue, handleSendMessage }) {
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      handleSendMessage(inputValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="message-input">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type a message..."
      />
      <button type="submit">Send</button>
    </form>
  );
}

function App3() {
  const [messages, setMessages] = useState([]); 
  const [inputValue, setInputValue] = useState(''); 

  const handleSendMessage = (message) => {
    const newMessage = {
      text: message,
      user: 'User1', 
    };
    setMessages([...messages, newMessage]);
    setInputValue(''); 
  };

  return (
    <div className="chat-container">
      <MessageList messages={messages} />
      <MessageInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
}

export default App3;
