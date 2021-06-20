import React from 'react';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import './App.css';
import { ButtonGroup } from '@material-ui/core';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CVList from './screens/cv-list';
import CVAdd from './screens/cv-add';
import CVDetail from './screens/cv-detail';

function App() {
  
  return (
    <Router>
      <Container
        maxWidth={"md"}
        className="App" 
        fixed
      >

        <Paper
          className="page"
        >
          <ButtonGroup 
            variant="text" 
            color="primary" 
            aria-label="text primary button group"
          >
            <Button>
              <Link to="/">CV Listesi</Link>
            </Button>
            <Button>
              <Link to="/add">CV Ekle</Link>
            </Button>
          </ButtonGroup>
          
          <Switch>
            
            <Route
              path="/"
              exact
            >
              <CVList/>
            </Route>

            <Route
              path="/add"
              exact
            >
              <CVAdd/>
            </Route>

            <Route
              path="/cv/:id"
              exact
            >
              <CVDetail/>
            </Route>

          </Switch>

        </Paper>

      </Container>
    </Router>
  );
}

export default App;
