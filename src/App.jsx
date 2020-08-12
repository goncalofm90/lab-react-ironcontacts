import React from 'react';
import ContactList from './components/ContactList';
import contacts from './contacts.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContactList />
      </header>
    </div>
  );
}

export default App;
