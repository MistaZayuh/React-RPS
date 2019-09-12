import React from "react";
import { Button, Icon } from "semantic-ui-react";

const Game = (props) => (

  <div>
    <Button 
    name="rock"
    onClick={() => props.handleClick("rock")}
    animated='vertical'>
      <Button.Content hidden>Rock</Button.Content>
      <Button.Content visible>
        <Icon name='hand rock outline' />
      </Button.Content>
    </Button>
    <Button 
    name="paper"
    onClick={() => props.handleClick("paper")}
    animated='vertical'>
      <Button.Content hidden>Paper</Button.Content>
      <Button.Content visible>
        <Icon name='hand paper outline' />
      </Button.Content>
    </Button>
    <Button 
    name="scissors"
    onClick={() => props.handleClick("scissors")}
    animated='vertical'>
      <Button.Content hidden>Scissors</Button.Content>
      <Button.Content visible>
        <Icon name='hand scissors outline' />
      </Button.Content>
    </Button>
  </div>
);

export default Game;