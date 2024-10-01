import React, { useState, useEffect, useCallback } from 'react';
import Header from './Header.js';
import './Container.css';

function Container() {
  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default Container;
