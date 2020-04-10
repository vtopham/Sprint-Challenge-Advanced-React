import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import DisplayPlayers from "./components/DisplayPlayers"



class App extends React.Component{
  constructor() {
    super()
    this.state = {
      playersArray: []
      //SHAPE: array of objects with country, id, name, searches
    }
    
  }


  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
    .then(response => {
      this.setState({
        playersArray:response.data
      })
    })
  }
  

  render() {
    return(
      <>
      <h1>This is the app!</h1>
      <DisplayPlayers playersArray = {this.state.playersArray}/>
      </>
    )
  }
}

export default App;
