import React from "react";
import { Statistic, } from "semantic-ui-react"

const Scoreboard = ({wins, losses, ties, winner, compChoice, playerChoice}) => (

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
      <Statistic>
        <Statistic.Value>{compChoice}</Statistic.Value>
        <Statistic.Label>Computer Threw </Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{playerChoice}</Statistic.Value>
        <Statistic.Label>Player Threw </Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{winner}</Statistic.Value>
        <Statistic.Label>Winnner </Statistic.Label>
      </Statistic>
    </Statistic.Group>
  </div>

);

export default Scoreboard;