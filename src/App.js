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

const App = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
      const json = await data.json();
      setResults(json.Search);
      props.history.push('results');
    }

    console.log('SEARCH TERM', searchTerm, props)
    if (searchTerm) {
      fetchResults(); 
    }
  }, [searchTerm]);

  return (
    <div className="App">
        <p>Movie search</p>
      <Switch>
        <Route exact path="/search">
          <SearchPage onHandleSearch={setSearchTerm}/>
        </Route>
        <Route exact path="/results">
          <ResultsPage results={results} />
        </Route>
        <Redirect to="/search" />
      </Switch>
    </div>
  );
}

export default withRouter(App);
