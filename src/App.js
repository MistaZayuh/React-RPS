import React from 'react';
import { Header, Container, Statistic, Button, Icon } from "semantic-ui-react";
// import Game from "./Game";
// import Results from "./Results";

class App extends React.Component {
  state = { history: { wins: 0, losses: 0, ties: 0}, winner: "banana" };

  handleClick = (name) => {
    let i = this.rando()
    const compChoices = ["rock", "paper", "scissors"]
    let comp = compChoices[i]
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
      setHistory()

  };

  rando = () => {
    return Math.floor((Math.random()) * 2);
  };

  setHistory = () => {
    if (this.state.winner === "player" ) {
      this.setState({history: [wins: (this.state.history.wins +1)]})
    } else if (this.state.winner === "computer" ) {
      this.setState({history: [wins: (this.state.history.wins +1)]})
    }
  }

  render() {
    return(
      <Container style={{ marginTop: "25px" }}>
        <Header>
          Rock Paper Scissors yo
        </Header>
        <div>
    <Statistic.Group>
      <Statistic>
        <Statistic.Value>{this.state.history.wins}</Statistic.Value>
        <Statistic.Label>Wins</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{this.state.history.losses}</Statistic.Value>
        <Statistic.Label>Losses</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{this.state.history.ties}</Statistic.Value>
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
