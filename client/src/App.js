import React, { Component } from 'react';
import NavBar from './components/NavBar';
import ToDoList from './components/ToDoList';
import ItemModal from './components/ItemModal';
import { Provider } from 'react-redux';
import store from './store';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar/>
          <Container>
            <ItemModal/>
            <ToDoList/>
          </Container>
        </div>
      </Provider>
    );
  }
}


export default App;
