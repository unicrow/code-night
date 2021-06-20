import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import './App.css';
import { ButtonGroup } from '@material-ui/core';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CVList from './screens/cv-list';
import CVAdd from './screens/cv-add';
import CVDetail from './screens/cv-detail';

function App() {
  
  return (
    <BrowserRouter>
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
              <Link to="/add">CV Add</Link>
            </Button>
            <Button>
              <Link to="/cv/1">CV Detail</Link>
            </Button>
            <Button>
              <Link to="/">CV List</Link>
            </Button>
          </ButtonGroup>
          
          <Switch>
            
            <Route
              path="/"
            >
              <CVList/>
            </Route>

            <Route
              path="/add"
            >
              <CVAdd/>
            </Route>

            <Route
              path="/cv/:id"
            >
              <CVDetail/>
            </Route>

          </Switch>

        </Paper>

      </Container>
    </BrowserRouter>
  );
}

export default App;
