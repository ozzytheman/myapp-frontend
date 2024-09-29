import React from 'react';
import axios from 'axios';

function App() {
  const createUser = async () => {
    try {
      const response = await axios.post('https://backendmyapp-nbdz4jlfa-ozzys-projects-c2575939.vercel.app/create-user');
      console.log('User created:', response.data);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={createUser}>Enter</button>
      </header>
    </div>
  );
}

export default App;
