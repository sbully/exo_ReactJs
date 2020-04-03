import React from "react";

export default class Board extends React.Component {
  static state = {
    letter: "A"
  };

  render() {
    return (
      <div>
        <div className="row">{this.renderBut()}</div>
      </div>
    );
  }

  renderBut() {
    let LetterBut = [];
    let result = [];
    let currentletter = Board.state.letter;
    console.log(currentletter);
    for (var i = 0; i < 26; i++) {
      /*       if (i < 13) {

      } else {
        
      } */
      LetterBut.push(<button className="butLettre">{currentletter}</button>);
      currentletter = String.fromCharCode(currentletter.charCodeAt() + 1);
    }

    /* UPDATE STATIC VARIABLE */
    /*     this.state.setState({
      letter: currentletter
    });
 */

    return LetterBut;
  }
}
