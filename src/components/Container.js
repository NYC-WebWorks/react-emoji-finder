import React, { useState, useEffect, useCallback } from 'react';
import Header from './Header.js';
import Search from './Search.js';
import './Container.css';

function Container() {
  const [emojiData, setEmojiData] = useState([]);
  const [newEmojiData, setNewEmojiData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setEmojiData(data);
  }, []);

  const onChange = useCallback(
    val => {
      setSearchQuery(val.toLowerCase());
    },
    [setNewEmojiData, setSearchQuery, emojiData]
  );

  return (
    <div className="container">
      <Header />
      <Search onChange={onChange} />
    </div>
  );
}

export default Container;
