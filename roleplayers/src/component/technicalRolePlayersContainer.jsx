import React from "react";
import RolePlayersCategoryRow from "./rolePlayersCategoryRow";
import RolePlayersRole from "./rolePlayersRole";

<<<<<<< HEAD
function TechnicalRolePlayersContainer({roleplayers}}) {
  const rows = [];
  let lastCategory = null;
  this.props.roleplayers.forEach((roleplayers) => {
    if (roleplayers.category !== lastCategory) {
      rows.push(
        <RolePlayersCategoryRow
          category={roleplayers.category}
          key={roleplayers.category}
=======
class TechnicalRolePlayersContainer extends Component {
  render() {
    const rows = [];

    let lastCategory = null;
    this.props.roleplayers.forEach((roleplayers) => {
      if (roleplayers.category !== lastCategory) {
        rows.push(
          <RolePlayersCategoryRow
            category={roleplayers.category}
            key={roleplayers.category}
          />
        );
      }
      rows.push(
        <RolePlayersRole
          roleplayerdetails={roleplayers}
          currentRolePlayers={this.props.currentRolePlayers}
          //key={this.props.currentRolePlayers.key}
          key={roleplayers.role}
          handleInput={this.props.handleInput}
>>>>>>> roleplayersuserinput
        />
      );
    }
    rows.push(
      <RolePlayersRole roleplayerdetails={roleplayers} key={roleplayers.role} />
    );
    lastCategory = roleplayers.category;
  });
  return <div>{rows}</div>;
}

export default TechnicalRolePlayersContainer;

// class TechnicalRolePlayersContainer extends Component {
//   render() {
//     const rows = [];
//     let lastCategory = null;
//     this.props.roleplayers.forEach((roleplayers) => {
//       if (roleplayers.category !== lastCategory) {
//         rows.push(
//           <RolePlayersCategoryRow
//             category={roleplayers.category}
//             key={roleplayers.category}
//           />
//         );
//       }
//       rows.push(
//         <RolePlayersRole
//           roleplayerdetails={roleplayers}
//           key={roleplayers.role}
//         />
//       );
//       lastCategory = roleplayers.category;
//     });
//     return <div>{rows}</div>;
//   }
// }

// export default TechnicalRolePlayersContainer;
