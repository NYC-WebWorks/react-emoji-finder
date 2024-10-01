import React, { useState, useEffect, useCallback } from 'react';
import Header from './Header.js';
import Search from './Search.js';
import Results from './Results.js';
import data from '../json/data.json';
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

      const queryKeywords = val.toLowerCase().trim().split(' ');

      const newEmojis = [];

      const queryLength = queryKeywords.length;

      let queryLengthSum = 0;

      if (val.toLowerCase() !== '') {
        emojiData.forEach(item => {
          let removeDuplicates = [...new Set(item.keywords.trim().split(' '))];
          queryLengthSum = 0;
          queryKeywords.forEach(query => {
            removeDuplicates.forEach(keyword => {
              if (keyword.indexOf(query) >= 0) {
                queryLengthSum++;
              }
            });
          });

          if (queryLength <= queryLengthSum) {
            newEmojis.push(item);
          }
        });
      }

      setNewEmojiData(newEmojis);
    },
    [setNewEmojiData, setSearchQuery, emojiData]
  );

  return (
    <div className="container">
      <Header />
      <Search onChange={onChange} />
      {!searchQuery ? (
        <p className="first-render">Type Keywords to Search</p>
      ) : (
        <Results emojiFiltered={searchQuery === '' ? emojiData : newEmojiData} />
      )}
    </div>
  );
}

export default Container;
