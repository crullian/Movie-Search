import { useState, useEffect } from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { withRouter } from 'react-router';
import SearchPage from './components/SearchPage';
import ResultsPage from './components/ResultsPage';
import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  console.log('API KEY', API_KEY)
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  useEffect(() => {
    if (searchTerm) {
      fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`)
        .then(response => {
          console.log('response', response)
          return response.ok && response.json()
        })
        .then(json => setResults(json.Search))
        .catch(err => console.error('Problems, son:', err))
    }
  }, [searchTerm]);

  console.log('RESULTS', results)
  return (
    <div className="App">
        <p>Movie search</p>
      <Switch>
        <Route exact path="/search">
          <SearchPage onHandleSearch={setSearchTerm}/>
        </Route>
        <Route exact path="/results">
          <ResultsPage />
        </Route>
        <Redirect to="/search" />
      </Switch>
    </div>
  );
}

export default withRouter(App);
