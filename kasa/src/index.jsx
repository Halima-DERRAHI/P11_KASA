import React from 'react';
import { createRoot } from 'react-dom/client';
import RouterIndex from './components/Router/index.jsx'
import styles from './Index.module.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className={styles.root}>
      <RouterIndex />
    </div>
  </React.StrictMode>,
);