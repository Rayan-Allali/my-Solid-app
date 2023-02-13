import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <p class="text-red-600 font-bold text-xl">Test</p>
    </div>
  );
};

export default App;
