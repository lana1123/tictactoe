import React, { Component } from "react";

function RolePlayer(props) {
  const currentRolePlayers = props.currentRolePlayers;
  //currentRolePlayers.map((roleplayer) => {
  return (
    <div key={currentRolePlayers.position}>
      <p>
        <span>{currentRolePlayers.position}:</span>
        <input
          type="text"
          id="name"
          placeholder="Enter name here..."
          value={currentRolePlayers.name}
          onChange={props.handleInput}
        />
        <input
          type="text"
          id="title"
          placeholder="Enter title here..."
          value={currentRolePlayers.title}
          onChange={props.handleInput}
        />
        <input
          type="text"
          id="club"
          placeholder="Enter club name here..."
          value={currentRolePlayers.club}
          onChange={props.handleInput}
        />
        <button
          type="submit"
          onClick={() => props.saveInput(currentRolePlayers.name)}
        >
          Save
        </button>
      </p>
    </div>
  );
  // });
}

export default RolePlayer;

//all input share the same handleInput
// return (
//     <div key={currentRolePlayers.position}>
//       <p>
//         <span>{currentRolePlayers.position}:</span>
//         <input
//           type="text"
//           id="name"
//           placeholder="Enter name here..."
//           value={currentRolePlayers.name}
//           onChange={props.handleInput}
//         />
//         <input
//           type="text"
//           id="title"
//           placeholder="Enter title here..."
//           value={currentRolePlayers.title}
//           onChange={props.handleInput}
//         />
//         <input
//           type="text"
//           id="club"
//           placeholder="Enter club name here..."
//           value={currentRolePlayers.club}
//           onChange={props.handleInput}
//         />
//         <button
//           type="submit"
//           onClick={() => props.saveInput(currentRolePlayers.name)}
//         >
//           Save
//         </button>
//       </p>
//     </div>
//   );
//different handleInput for different input
// return (
//     <div key={currentRolePlayers.position}>
//       <p>
//         <span>{currentRolePlayers.position}:</span>
//         <input
//           type="text"
//           id="name"
//           placeholder="Enter name here..."
//           value={currentRolePlayers.name}
//           onChange={props.handleInputName}
//         />
//         <input
//           type="text"
//           id="title"
//           placeholder="Enter title here..."
//           value={currentRolePlayers.title}
//           onChange={(e) => props.handleInputTitle(e.target.value)}
//         />
//         <input
//           type="text"
//           id="club"
//           placeholder="Enter club name here..."
//           value={currentRolePlayers.club}
//           onChange={(e) => props.handleInputClub(e.target.value)}
//         />
//         <button
//           type="submit"
//           onClick={() => props.saveInput(currentRolePlayers.name)}
//         >
//           Save
//         </button>
//       </p>
//     </div>
//   );
