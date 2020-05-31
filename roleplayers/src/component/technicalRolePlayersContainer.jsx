import React from "react";
import RolePlayersCategoryRow from "./rolePlayersCategoryRow";
import RolePlayersRole from "./rolePlayersRole";

const TechnicalRolePlayersContainer = ({ category, role }) => {
  return (
    <div>
      <RolePlayersCategoryRow category={category} role={role} />
      <RolePlayersRole category={category} role={role} />
    </div>
  );
};

export default TechnicalRolePlayersContainer;

// const TechnicalRolePlayersContainer = ({ roleplayers }) => {
//   const rows = [];
//   let lastCategory = null;
//   roleplayers.forEach((roleplayers) => {
//     if (roleplayers.category !== lastCategory) {
//       rows.push(
//         <RolePlayersCategoryRow
//           category={roleplayers.category}
//           key={roleplayers.category}
//         />
//       );
//     }
//     rows.push(
//       <RolePlayersRole roleplayerdetails={roleplayers} key={roleplayers.role} />
//     );
//     lastCategory = roleplayers.category;
//   });
//   return <div>{rows}</div>;
// };

// export default TechnicalRolePlayersContainer;
