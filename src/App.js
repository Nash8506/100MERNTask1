import React, { useEffect, useState } from 'react';

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('https://one00merntask1backend.onrender.com')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setGreeting(data.message))
      .catch(error => console.error('Error fetching greeting:', error));
  }, []);
  

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
}

export default App;
