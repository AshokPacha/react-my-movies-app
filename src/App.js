import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import MovieDetail from './components/MovieDetail';
import MoviesContainer from './components/MoviesContainer';
import Footer from './components/Footer';

const App = () => {

  return (
    <React.Fragment>
      <Header title="My Movies" />
      <Router>
        <Switch>
          <Route exact path='/'><MoviesContainer /></Route>
          <Route path='/title/:id'><MovieDetail /></Route>
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
