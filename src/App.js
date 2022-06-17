import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { withRouter } from 'react-router';
import SearchPage from './components/SearchPage';
import ResultsPage from './components/ResultsPage';
import './App.css';

function App() {
  return (
    <div className="App">
        <p>Movie search</p>
      <Switch>
        <Route exact path="/search">
          <SearchPage />
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
