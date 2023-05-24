import React, { useState } from 'react';
import './style.css';
import Header from './components/Header';
import SortTable from './components/SortTable';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  const [query, setQuery] = useState('');

  const handleQuery = (e) => {
    setQuery(e.target.value.toLowerCase());
  };
  return (
    <Provider store={store}>
      <Header query={query} handleQuery={handleQuery} />
      <SortTable query={query} />
    </Provider>
  );
};
export default App;
