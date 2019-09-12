import React from 'react';
import { Header, Container, Statistic, Button, Icon } from "semantic-ui-react";
import Scoreboard from "./Scoreboard";
import Game from "./Game";


class App extends React.Component {
  state = { wins: 0, losses: 0, ties: 0, winner: null, compChoice: null, playerChoice: null };

  compThrow = () => {
    let i = this.rando()
    let compOptions = ["rock", "paper", "scissors"]
    let compThrows = compOptions[i]
    return compThrows
  }

  handleClick = (name) => {
    this.setState({playerChoice: name})
    this.setState({compChoice: this.compThrow()})
    let comp = this.state.compChoice
    if (comp === name){
      this.setState({winner: "none"});}
    else if (comp === "rock" && name === "paper"){
      this.setState({winner: "player"});}
    else if (comp === "rock" && name === "scissors"){
      this.setState({winner: "computer"});}
    else if (comp === "paper" && name === "rock"){
      this.setState({winner: "computer"});}
    else if (comp === "paper" && name === "scissors"){
      this.setState({winner: "player"});}
    else if (comp === "scissors" && name === "rock"){
      this.setState({winner: "player"});}
    else if (comp === "scissors" && name === "paper"){
      this.setState({winner: "computer"});}
      this.setHistory()
  };

  rando = () => {
    return Math.floor((Math.random()) * 3);
  };

  setHistory = () => {
    if (this.state.winner === "player" ) {
      this.setState({ wins: this.state.wins + 1})
    } else if (this.state.winner === "computer" ) {
      this.setState({ losses: this.state.losses + 1})
    } else if (this.state.winner === "none" ) {
    this.setState({ ties: this.state.ties + 1})
    };
  };

  render() {
    return(
      <Container style={{ marginTop: "25px" }}>
        <Header>
          Rock Paper Scissors yo
        </Header>
        <Game handleClick={this.handleClick} />
        <Scoreboard 
        winner={this.state.winner}
        compChoice={this.state.compChoice}
        playerChoice={this.state.playerChoice}
        wins={this.state.wins}
        losses={this.state.losses}
        ties={this.state.ties} />
      </Container>
    );
  };
};
export default App;
