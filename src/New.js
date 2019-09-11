import React from "react";

class App extends React.Component {
  state = { history: { wins: 0, losses: 0, ties: 0}, winner: null };

  handleClick = (name) => {
    const compChoices = ["rock", "paper", "scissors"]
    let comp = compChoices.sample
    if (comp === name)
      this.setState({winner: "none"});
    else if (comp === "rock" && name === "paper")
      this.setState({winner: "player"});
    else if (comp === "rock" && name === "scissors")
      this.setState({winner: "computer"});
    else if (comp === "paper" && name === "rock")
      this.setState({winner: "computer"});
    else if (comp === "paper" && name === "scissors")
      this.setState({winner: "player"});
    else if (comp === "scissors" && name === "rock")
      this.setState({winner: "player"});
    else if (comp === "scissors" && name === "paper")
      this.setState({winner: "computer"});
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
        <Statistic.Value>{wins}</Statistic.Value>
        <Statistic.Label>Wins</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{losses}</Statistic.Value>
        <Statistic.Label>Losses</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{ties}</Statistic.Value>
        <Statistic.Label>Ties</Statistic.Label>
      </Statistic>
    </Statistic.Group>
  </div>
  <div>
      <Button 
      name="rock"
      onClick={() => this.handleClick(this.name)}
      animated='vertical'>
        <Button.Content hidden>Rock</Button.Content>
        <Button.Content visible>
          <Icon name='hand rock outline' />
        </Button.Content>
      </Button>
      <Button 
      name="paper"
      onClick={() => this.handleClick(this.name)}
      animated='vertical'>
        <Button.Content hidden>Paper</Button.Content>
        <Button.Content visible>
          <Icon name='hand paper outline' />
        </Button.Content>
      </Button>
      <Button 
      name="scissors"
      onClick={() => this.handleClick(this.name)}
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