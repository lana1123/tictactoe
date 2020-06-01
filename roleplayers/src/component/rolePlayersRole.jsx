import React from "react";
import RolePlayerDetails from "./rolePlayerDetails";
import "../index.css";

const RolePlayersRole = ({ roleplayerdetails, handleInput }) => {
  return (
    <div>
      <div className="RolePlayersRole">{roleplayerdetails.role}</div>
      <div>
        <RolePlayerDetails role={roleplayerdetails} handleInput={handleInput} />
      </div>
    </div>
  );
};

export default RolePlayersRole;

// const RolePlayersRole = ({
//   roleplayerdetails,
//   currentRolePlayers,
//   handleInput,
// }) => {
//   // const roleplayerdetails = this.props.roleplayerdetails;
//   console.log(roleplayerdetails.role);
//   return (
//     <div>
//       <div className="RolePlayersRole">{roleplayerdetails.role}</div>
//       <div>
//         <RolePlayerDetails
//           roleplayerdetails={roleplayerdetails}
//           currentRolePlayers={currentRolePlayers}
//           handleInput={handleInput}
//         />
//       </div>
//     </div>
//   );
// };

// export default RolePlayersRole;
