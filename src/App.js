// src/App.js
import React from 'react';
import './App.css';
import Dropdown from './components/dropdown';
import FooterIcons from './components/footericon';
import DateTimeDisplay from './DateTimeDisplay';
//import Chatbot from  './components/chatbot'
import Home from './assets/Home.png';

function App() {
  
  return (
    <div 
    className="App" 
    style={{ 
      backgroundImage: `url(${Home})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <header className="App-header">
    <div>
    <a href='https://acpc.gov.ph/'>ACPC Philippines</a> 
    <a href='https://helpdesk.acpc.gov.ph/hc/en-us/requests/new'>Submit a Request</a>
    <a href='https://www.gov.ph/'>Gov</a>
    <a href='https://www.gov.ph/'>Home</a>
    </div>
    <DateTimeDisplay/>
    </header>
    <Dropdown />
    <FooterIcons />
    {/*<Chatbot />*/}
  </div>
  );
}

export default App;

