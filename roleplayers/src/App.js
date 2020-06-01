import React, { Component } from "react";
import RolePlayer from "./component/rolePlayer";
import TechnicalRolePlayersContainer from "./component/technicalRolePlayersContainer";

class App extends Component {
  state = {
    allRoles: [
      {
        category: "Technical Role Players",
        role: "ASAA",
        name: "",
        title: "",
      },
    ],
  };

  // componentDidMount() {
  //   this.getRoles();
  // }

  // getRoles = () => {
  //   const ROLESBANK = this.ROLESBANK;
  //   ROLESBANK.map((role) => {
  //     this.setState({
  //       roles: this.ROLEPLAYERS,
  //     });
  //   });
  // };

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

  handleInput = (event) => {
    const target = event.target;
    console.log("HERE");
    this.setState({
      allRoles: {
        name: target.id === "name" ? target.value : this.state.allRoles.name,
        title: target.id === "title" ? target.value : this.state.allRoles.title,
      },
    });
  };

  // handleInput(event) {
  //   const target = event.target;

  //   this.setState({
  //     currentRolePlayers: {
  //       position: this.state.currentRolePlayers.position,
  //       name:
  //         target.id === "name"
  //           ? target.value
  //           : this.state.currentRolePlayers.name,
  //       title:
  //         target.id === "title"
  //           ? target.value
  //           : this.state.currentRolePlayers.title,
  //       club:
  //         target.id === "club"
  //           ? target.value
  //           : this.state.currentRolePlayers.club,
  //     },
  //   });
  // }

  // handleInputName(event) {
  //   this.setState({
  //     currentRolePlayers: {
  //       position: this.state.currentRolePlayers.position,
  //       name: event.target.value,
  //       title: this.state.currentRolePlayers.title,
  //       club: this.state.currentRolePlayers.club,
  //     },
  //   });
  // }

  // handleInputTitle(event) {
  //   this.setState({
  //     currentRolePlayers: {
  //       position: this.state.currentRolePlayers.position,
  //       name: this.state.currentRolePlayers.name,
  //       title: event.target.value,
  //       club: this.state.currentRolePlayers.club,
  //     },
  //   });
  // }

  // handleInputClub(event) {
  //   this.setState({
  //     currentRolePlayers: {
  //       position: this.state.currentRolePlayers.position,
  //       name: this.state.currentRolePlayers.name,
  //       title: this.state.currentRolePlayers.title,
  //       club: event.target.value,
  //     },
  //   });
  // }

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

  savedAllRoles = (name, title) => {
    // const allRoles = [...this.state.allRoles];
    this.setState({
      allRoles: {
        name: name,
        title: title,
      },
    });
  };

  // passAllRoles = (name, title) => {
  //   this.setState({
  //     allRoles: {
  //       name: name,
  //       title: title,
  //     },
  //   });
  // };

  render() {
    console.log("RENDER");

    const listRolePlayers = this.state.allRoles.map(
      (roleplayer, handleInput) => {
        return (
          <div className="list" key={roleplayer.role}>
            <TechnicalRolePlayersContainer
              category={roleplayer.category}
              role={roleplayer.role}
              handleInput={(e) => this.handleInput(e)}
            />
          </div>
        );
      }
    );
    return (
      <div className="App">
        <header className="App-header"></header>
        <h1>Role Players</h1>
        <h2>Meeting 39 - 1 June 2020 - Theme: Celebrity Night</h2>
        <div>{listRolePlayers}</div>

        <div>{this.state.allRoles.category}</div>
        <div>{this.state.allRoles.role}</div>
        <div>{this.state.allRoles.name}</div>
        <div>{this.state.allRoles.title}</div>
      </div>
    );
  }
}

export default App;

const ROLESBANK = [
  {
    category: "Technical Role Players",
    role: "ASAA",
  },
  {
    category: "Technical Role Players",
    role: "GE",
  },
];

//version - save input at roleplayerdetails
// render() {
//   const listRolePlayers = ROLESBANK.map((roleplayer, savedRoles) => {
//     return (
//       <div className="list" key={roleplayer.role}>
//         <TechnicalRolePlayersContainer
//           category={roleplayer.category}
//           role={roleplayer.role}
//           savedRoles={(name, title) => this.savedAllRoles(name, title)}
//         />
//       </div>
//     );
//   });
//   return (
//     <div className="App">
//       <header className="App-header"></header>
//       <h1>Role Players</h1>
//       <h2>Meeting 39 - 1 June 2020 - Theme: Celebrity Night</h2>
//       <div>{listRolePlayers}</div>
//       <div>{this.state.allRoles.name}</div>
//       <div>{this.state.allRoles.title}</div>
//     </div>
//   );
// }
// }

// const ROLEPLAYERS = [
//   {
//     category: "Technical Role Players",
//     role: "ASAA",
//     name: "Haha",
//     title: "IP1",
//     club: "RunningMan",
//     phoneNumber: "12346789",
//   },
//   {
//     category: "Technical Role Players",
//     role: "Photo Master",
//     name: "Henry",
//     title: "MS3",
//     club: "SuperJuniorM",
//     phoneNumber: "97654321",
//   },
//   {
//     category: "Technical Role Players",
//     role: "TME",
//     name: "YooJaeSuk",
//     title: "DTM",
//     club: "RunningMan",
//     phoneNumber: "54687313",
//   },
//   {
//     category: "Technical Role Players",
//     role: "TTM",
//     name: "ParkSeoJoon",
//     title: "PI3",
//     club: "ItaewonClass",
//     phoneNumber: "5464546878",
//   },
//   {
//     category: "Technical Role Players",
//     role: "TTE",
//     name: "JungHaeIn",
//     title: "PI3",
//     club: "OneSpringNight",
//     phoneNumber: "546874546",
//   },
//   {
//     category: "Technical Role Players",
//     role: "GE",
//     name: "GongYoo",
//     title: "DTM",
//     club: "Goblin",
//     phoneNumber: "123649875",
//   },
//   {
//     category: "Technical Role Players",
//     role: "Grammarian",
//     name: "SeoKangJoon",
//     title: "EC2",
//     club: "Namsin3",
//     phoneNumber: "54687313",
//   },
//   {
//     category: "Technical Role Players",
//     role: "Ah Counter",
//     name: "SongJiHyo",
//     title: "DL3",
//     club: "RunningMan",
//     phoneNumber: "456487123",
//   },
//   {
//     category: "Technical Role Players",
//     role: "Timer",
//     name: "JiChangWook",
//     title: "DL2",
//     club: "Healer",
//     phoneNumber: "544564789",
//   },
//   {
//     category: "Project Speech Speakers",
//     role: "Project Speaker 1",
//     name: "IU",
//     title: "IP2",
//     club: "HotelDelLuna",
//     phoneNumber: "456897123",
//   },
//   {
//     category: "Project Speech Speakers",
//     role: "Evaluator 1",
//     name: "Zico",
//     title: "DL3",
//     club: "AnySong",
//     phoneNumber: "123456783",
//   },
//   {
//     category: "Project Speech Speakers",
//     role: "Project Speaker 2",
//     name: "ParkBoGum",
//     title: "DL3",
//     club: "Reply1988",
//     phoneNumber: "12341988",
//   },
//   {
//     category: "Project Speech Speakers",
//     role: "Evaluator 2",
//     name: "SeoInGuk",
//     title: "DL4",
//     club: "Reply1997",
//     phoneNumber: "123461977",
//   },
//   {
//     category: "Project Speech Speakers",
//     role: "Project Speaker 3",
//     name: "Taeyon",
//     title: "PI4",
//     club: "SNSD",
//     phoneNumber: "4561234978",
//   },
//   {
//     category: "Project Speech Speakers",
//     role: "Evaluator 3",
//     name: "Jennie",
//     title: "DTM",
//     club: "Blackpink",
//     phoneNumber: "123456783",
//   },
// ];

// const SPEECHDETAILS = [
//   {
//     category: "Project Speech Speakers",
//     role: "Project Speaker 1",
//     path: "InnovativePlanningLevel3Project2",
//     speechTitle: "Eight",
//   },
//   {
//     category: "Project Speech Speakers",
//     role: "Project Speaker 2",
//     Path: "DynamicLeadershipLevel4",
//     speechTitle: "ItaewonClass2",
//   },
//   {
//     category: "Project Speech Speakers",
//     role: "Project Speaker 3",
//     Path: "PersuasiveInfluenceLevel5",
//     speechTitle: "AllAboutYou",
//   },
// ];
