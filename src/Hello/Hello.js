import React, { useState, useEffect } from 'react';
import './Hello.css';
import { API } from '../constants';

/* eslint-disable no-console */

const Hello = () => {
  const [sender, setSender] = useState('React');
  useEffect(() => {
    fetch(`${API}/hello`)
      .then(res => {
        return res.json();
      })
      .then(({ message }) => setTimeout(() => setSender(message), 3000))
      .catch(e => {
        if (e instanceof SyntaxError) {
          console.error('This error ocurred because you did not start "node index.js. ' +
          'But it is okay, you don\'t have to. ' +
          'Just delete this component, because it was created for testing purposes');
        }
        console.error(e);
      });
  }, []);

  return <p className="hello">Hello from {sender}!</p>;
};

export default Hello;
