import React from 'react';
import chatbot from '../assets/chatbot.gif'


const Chatbot = () => {
  return (
    <div className="gif-container">
      <img src={chatbot} alt="Animated GIF" className="gif" />
    </div>
  );
};

export default Chatbot;