import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import DisplayPlayers from "./components/DisplayPlayers"
import ColorPicker from "./components/ColorPicker"



class App extends React.Component{
  constructor() {
    super()
    this.state = {
      playersArray: [{ //some fake data so i'm not hitting the api all the time
        name: "megan",
        country: "usa",
        searches: 7
      }]
      //SHAPE: array of objects with country, id, name, searches
    }
    
  }


  // componentDidMount() {
  //   axios.get("http://localhost:5000/api/players")
  //   .then(response => {
  //     this.setState({
  //       playersArray:response.data
  //     })
  //   })
  // }
  

  render() {

    return(
      <>
      <h1>This is the app!</h1>
      <ColorPicker />
      <DisplayPlayers playersArray = {this.state.playersArray}/> {/*call the component that displays all results*/}
      </>
    )
  }
}

export default App;
