import React from "react";

export default class Board extends React.Component {
  static state = {
    letter: "A"
  };

  static update(val) {
    Board.state.setState({
      letter: "O"
    });
  }

  render() {
    return (
      <div>
        <div className="row">{this.renderBut()}</div>
        <div className="row">{this.renderBut()}</div>
      </div>
    );
  }

  renderBut() {
    let LetterBut = [];
    let currentletter = Board.state.letter;
    console.log(currentletter);
    for (var i = 0; i < 13; i++) {
      LetterBut.push(<button className="butLettre">{currentletter}</button>);
      currentletter = String.fromCharCode(currentletter.charCodeAt() + 1);
    }

    /* UPDATE STATIC VARIABLE */
    /*     this.state.setState({
      letter: currentletter
    });
 */
    Board.update();
    return LetterBut;
  }
}
