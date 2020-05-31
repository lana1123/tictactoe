import React, { useState } from "react";
import "../index.css";

const RolePlayerDetails = ({ role }) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  return (
    <div className="RolePlayerDetails">
      <div>
        Name:
        <input
          type="text"
          key={role}
          id="name"
          placeholder="Enter name here..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        Title:
        <input
          type="text"
          id="title"
          placeholder="Enter title here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
    </div>
  );
};

export default RolePlayerDetails;

// const RolePlayerDetails = ({ roleplayerdetails, handleInput, saveInput }) => {
//   return (
//     <div className="RolePlayerDetails">
//       <div>
//         Name:
//         <input
//           type="text"
//           id="name"
//           placeholder="Enter name here..."
//           value={roleplayerdetails.name}
//           onChange={handleInput}
//         />
//       </div>
//       <div>
//         Title:
//         <input
//           type="text"
//           id="title"
//           placeholder="Enter title here..."
//           value={roleplayerdetails.title}
//           onChange={handleInput}
//         />
//       </div>
//       <div>
//         Club:
//         <input
//           type="text"
//           id="club"
//           placeholder="Enter club name here..."
//           value={roleplayerdetails.club}
//           onChange={handleInput}
//         />
//       </div>
//       <div>
//         Phone Number:
//         <input
//           type="text"
//           id="phonenumber"
//           placeholder="Enter phone number here..."
//           value={roleplayerdetails.phoneNumber}
//           onChange={handleInput}
//         />
//       </div>
//       <button type="submit" onClick={() => saveInput(roleplayerdetails.name)}>
//         Save
//       </button>
//     </div>
//   );
// };

// export default RolePlayerDetails;
