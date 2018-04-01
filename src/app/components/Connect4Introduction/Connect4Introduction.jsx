import React from 'react';
import './Connect4Introduction.scss';

export default class Connect4Introduction extends React.Component {
  render() {
    return (
      <div id="popupIntro" className="overlay">
        <div className="popup">
            <h1>Game instructions</h1>

            <div className="content">
                <h2>User Interaction:</h2>
                1. Click on the rows to insert your token in the chosen column.<br/>
                2. The current Player is shown on the bottom of the playground.<br/>
                <br/>
                <h2>Goal:</h2>
                Connect Four is a two-person strategy game with the goal of bringing the first four of his own pieces in a line.
                <br/><br/>
                <h2>Game Play:</h2>
                The game is played on a vertical hollow board into which let players drop their
                tokens alternately. The board consists of seven columns (vertical) and six rows (horizontally).
                Each player has 21 identical colored game pieces. If a player drops a token in a column, this occupies
                the lowest free space of the column. The winner is the player who manages to be the first to bring four
                or more of his playing pieces horizontally, vertically or diagonally in a line. The game ends in a draw
                if the board is completely filled without a player has formed a four-line.
                
                <button className="closeInstruction fancyButton" onClick={this.props.closePopup}>Close</button>

            </div>
        </div>
    </div>
    );
  }
}

