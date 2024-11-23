const StatusMessage = () => {
  const [status, setStatus] = useState('idle'); 

  const simulateStatusChange = (newStatus) => {
    setStatus(newStatus);
  };
  let statusMessage;
  switch (status) {
    case 'processing':
      statusMessage = <div style={{ color: 'blue' }}>Processing...</div>;
      break;
    case 'success':
      statusMessage = <div style={{ color: 'green' }}>Success!</div>;
      break;
    case 'error':
      statusMessage = <div style={{ color: 'red' }}>Error occurred!</div>;
      break;
    default:
      statusMessage = <div style={{ color: 'gray' }}>Idle</div>;
      break;
  }

  return (
    <div>
      <button onClick={() => simulateStatusChange('processing')}>Start Processing</button>
      <button onClick={() => simulateStatusChange('success')}>Mark as Success</button>
      <button onClick={() => simulateStatusChange('error')}>Trigger Error</button>
      <button onClick={() => simulateStatusChange('idle')}>Reset</button>
      {statusMessage}
    </div>
  );
};

export default StatusMessage;
