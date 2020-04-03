import React, { Component } from "react";
import { render } from "@testing-library/react";

export default class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      items: []
    };
  }

  renderToDo() {
    return this.state.items.map(item => {
      /*       return (
        <div key={item}>
          {item}
          <button className="delItem" onClick={this.deleteToDo.bind(this)}>
            X
          </button>
        </div>
      ); */
      return (
        <tr key={item}>
          <td className="Todo">{item}</td>
          <td className="Action">
            <button className="delItem" onClick={this.deleteToDo.bind(this)}>
              X
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Ma TODO List</h1>
        <form>
          <input
            value={this.state.userInput}
            type="text"
            placeholder="Renseigner un item"
            onChange={this.onChange.bind(this)}
          />
          <input
            type="submit"
            value="Ajouter"
            onClick={this.addToDo.bind(this)}
          />
          {/* <button onClick={this.addToDo.bind(this)}>Valider</button> */}
        </form>
        <table>
          <thead>
            <tr>
              <th className="Todo">Things To Do</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderToDo()}</tbody>
        </table>
        {/*         <div>{this.renderToDo()}</div> */}
      </div>
    );
  }

  addToDo(event) {
    event.preventDefault();
    /*Verifiation unicité des items */
    for (var i = 0; i < this.state.items.length; i++) {
      if (this.state.userInput === this.state.items[i]) {
        return;
      }
    }

    this.setState(
      {
        items: [...this.state.items, this.state.userInput], // ajout de l input au tableau d item
        userInput: "" //remettre l input text vide
      },
      () => console.log(this.state.items)
    );
  }

  onChange(event) {
    this.setState(
      {
        userInput: event.target.value
      } /* ,
      () => console.log(this.state.userInput) */
    );
  }

  deleteToDo(event) {
    event.preventDefault();
    const array = this.state.items;
    const index = array.indexOf(event.target.value);

    array.splice(index, 1);
    this.setState({
      items: array
    });
  }
}
