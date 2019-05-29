import React, { useState, useEffect } from 'react';
import './Hello.css';

const Hello = () => {
  const [sender, setSender] = useState('React');
  useEffect(() => {
    fetch('/api/hello')
      .then(res => {
        return res.json();
      })
      .then(({ message }) => setTimeout(() => setSender(message), 3000))
      // eslint-disable-next-line
      .catch(console.trace);
  }, []);

  return <p className="hello">Hello from {sender}!</p>;
};

export default Hello;
