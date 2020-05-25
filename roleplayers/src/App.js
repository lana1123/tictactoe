import React, { Component } from "react";
import RolePlayer from "./component/roleplayer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rolePlayers: [],
      currentRolePlayers: {
        position: "GE",
        name: "",
        title: "",
        club: "",
        confirm: null,
      },
    };
    this.handleInputName = this.handleInputName.bind(this);
    this.handleInputTitle = this.handleInputTitle.bind(this);
    this.handleInputClub = this.handleInputClub.bind(this);
    //  this.setUpdate = this.setUpdate.bind(this);
    this.saveInput = this.saveInput.bind(this);
  }

  saveInput(name) {
    // e.preventDefault();
    const newRolePlayer = this.state.currentRolePlayers;

    // const newRolePlayer = name;
    if (newRolePlayer.name !== "") {
      const newRolePlayers = [...this.state.rolePlayers, newRolePlayer];
      this.setState({
        rolePlayers: newRolePlayers,
      });
    }
  }

  handleInputName(name) {
    this.setState({
      currentRolePlayers: {
        position: this.state.currentRolePlayers.position,
        name: name,
        title: this.state.currentRolePlayers.title,
        club: this.state.currentRolePlayers.club,
      },
    });
  }

  handleInputTitle(title) {
    this.setState({
      currentRolePlayers: {
        position: this.state.currentRolePlayers.position,
        name: this.state.currentRolePlayers.name,
        title: title,
        club: this.state.currentRolePlayers.club,
      },
    });
  }

  handleInputClub(club) {
    this.setState({
      currentRolePlayers: {
        position: this.state.currentRolePlayers.position,
        name: this.state.currentRolePlayers.name,
        title: this.state.currentRolePlayers.title,
        club: club,
      },
    });
  }

  // setUpdate(text, position) {
  //   this.setState({
  //     currentRolePlayers: {
  //       position: this.state.currentRolePlayers.position,
  //       name: text,
  //     },
  //   });
  //   const newRolePlayer = this.state.currentRolePlayers;
  //   if (newRolePlayer.name !== "") {
  //     const newRolePlayers = [...this.state.rolePlayers, newRolePlayer];
  //     this.setState({
  //       rolePlayers: newRolePlayer,
  //     });
  //   }
  //   const roleplayers = this.state.rolePlayers;
  //   this.setState({
  //     rolePlayers: roleplayers,
  //   });
  // }

  render() {
    console.log(this.state.currentRolePlayers);
    const SavedRolePlayers = this.state.rolePlayers;
    const listSavedRolePlayers = SavedRolePlayers.map((roleplayer) => {
      return (
        <div className="list" key={roleplayer.position}>
          <p>{roleplayer.position}</p>
          <p>{roleplayer.name}</p>
          <p>{roleplayer.title}</p>
          <p>{roleplayer.club}</p>
        </div>
      );
    });
    return (
      <div className="App">
        <header className="App-header"></header>
        <h1>Role Players</h1>
        <h2>Meeting 39 - 1 June 2020 - Theme: Celebrity Night</h2>
        <RolePlayer
          currentRolePlayers={this.state.currentRolePlayers}
          handleInputName={this.handleInputName}
          handleInputTitle={this.handleInputTitle}
          handleInputClub={this.handleInputClub}
          saveInput={this.saveInput}
          rolePlayers={this.state.rolePlayers}
        />
        <h3>{listSavedRolePlayers}</h3>
      </div>
    );
  }
}

export default App;
