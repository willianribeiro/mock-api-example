import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import postApi from 'service-api/postApi'

class App extends Component {
  componentWillMount() {
    // LIST
    console.log('pending...')
    postApi.list()
      .then(response => response.data)
      .then(posts => {
        console.log('LIST: ', posts)
      })

    // GET
    console.log('pending...')
    postApi.get(10)
      .then(response => response.data)
      .then(post => {
        console.log('GET: ', post)
      })

    // SAVE
    console.log('pending...')
    postApi.save({
      userId: 1,
      title: 'Mocking an api for faster front-end development',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    })
    .then(response => response.data)
    .then(post => {
      console.log('SAVE: ', post)
    })

    // REMOVE
    console.log('pending...')
    postApi.remove(10)
      .then(response => response.data)
      .then(response => {
        console.log('REMOVE: ', response)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
