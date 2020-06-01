import React from "react";
import RolePlayersCategoryRow from "./rolePlayersCategoryRow";
import RolePlayersRole from "./rolePlayersRole";

const TechnicalRolePlayersContainer = ({ rolesbank, handleInput }) => {
  return (
    <div>
      <RolePlayersCategoryRow category={rolesbank.category} />
      <RolePlayersRole roleplayerdetails={rolesbank} />
    </div>
  );
};

//when using hardcoded category and roles and input from roleplayerdetails
// const TechnicalRolePlayersContainer = ({ rolesbank, handleInput }) => {
//   const rows = [];
//   let lastCategory = null;
//   rolesbank.forEach((rolesbank) => {
//     if (rolesbank.category !== lastCategory) {
//       rows.push(
//         <RolePlayersCategoryRow
//           category={rolesbank.category}
//           key={rolesbank.category}
//         />
//       );
//     }
//     rows.push(
//       <RolePlayersRole
//         roleplayerdetails={rolesbank}
//         key={rolesbank.role}
//         handleInput={handleInput}
//       />
//     );
//     lastCategory = rolesbank.category;
//   });
//   return <div>{rows}</div>;
// };

// const TechnicalRolePlayersContainer = ({ category, role, savedRoles }) => {
//   return (
//     <div>
//       <RolePlayersCategoryRow category={category} role={role} />
//       <RolePlayersRole
//         category={category}
//         role={role}
//         savedRoles={savedRoles}
//       />
//     </div>
//   );
// };

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
