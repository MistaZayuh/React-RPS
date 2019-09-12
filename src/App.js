import React from 'react';
import { Header, Container, Statistic, Button, Icon } from "semantic-ui-react";
// import Game from "./Game";
// import Results from "./Results";

class App extends React.Component {
  state = { wins: 0, losses: 0, ties: 0, winner: null, compChoice: null };

  compThrow = () => {
    let i = this.rando()
    let compOptions = ["rock", "paper", "scissors"]
    let compThrows = compOptions[i]
    return compThrows
  }

  handleClick = (name) => {
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
        <div>
    <Statistic.Group>
      <Statistic>
        <Statistic.Value>{this.state.wins}</Statistic.Value>
        <Statistic.Label>Wins</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{this.state.losses}</Statistic.Value>
        <Statistic.Label>Losses</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{this.state.ties}</Statistic.Value>
        <Statistic.Label>Ties</Statistic.Label>
      </Statistic>
    </Statistic.Group>
  </div>
  <div>
      <Button 
      name="rock"
      onClick={() => this.handleClick("rock")}
      animated='vertical'>
        <Button.Content hidden>Rock</Button.Content>
        <Button.Content visible>
          <Icon name='hand rock outline' />
        </Button.Content>
      </Button>
      <Button 
      name="paper"
      onClick={() => this.handleClick("paper")}
      animated='vertical'>
        <Button.Content hidden>Paper</Button.Content>
        <Button.Content visible>
          <Icon name='hand paper outline' />
        </Button.Content>
      </Button>
      <Button 
      name="scissors"
      onClick={() => this.handleClick("scissors")}
      animated='vertical'>
        <Button.Content hidden>Scissors</Button.Content>
        <Button.Content visible>
          <Icon name='hand scissors outline' />
        </Button.Content>
      </Button>
    </div>
      </Container>
    );
  };
};
export default App;
