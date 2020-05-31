import React from "react";
import "../index.css";

const RolePlayerDetails = ({ roleplayerdetails, handleInput, saveInput }) => {
  return (
    <div className="RolePlayerDetails">
      <div>
        Name:
        <input
          type="text"
          id="name"
          placeholder="Enter name here..."
          value={roleplayerdetails.name}
          onChange={handleInput}
        />
      </div>
      <div>
        Title:
        <input
          type="text"
          id="title"
          placeholder="Enter title here..."
          value={roleplayerdetails.title}
          onChange={handleInput}
        />
      </div>
      <div>
        Club:
        <input
          type="text"
          id="club"
          placeholder="Enter club name here..."
          value={roleplayerdetails.club}
          onChange={handleInput}
        />
      </div>
      <div>
        Phone Number:
        <input
          type="text"
          id="phonenumber"
          placeholder="Enter phone number here..."
          value={roleplayerdetails.phoneNumber}
          onChange={handleInput}
        />
      </div>
      <button type="submit" onClick={() => saveInput(roleplayerdetails.name)}>
        Save
      </button>
    </div>
  );
};

export default RolePlayerDetails;

// class RolePlayerDetails extends Component {
//   render() {
//     const rolePlayerDetails = this.props.roleplayerdetails;

//     return (
//       <div className="RolePlayerDetails">
//         <div>
//           Name:
//           <input
//             type="text"
//             id="name"
//             placeholder="Enter name here..."
//             value={rolePlayerDetails.name}
//             onChange={this.props.handleInput}
//           />
//         </div>
//         <div>
//           Title:
//           <input
//             type="text"
//             id="title"
//             placeholder="Enter title here..."
//             value={rolePlayerDetails.title}
//             onChange={this.props.handleInput}
//           />
//         </div>
//         <div>
//           Club:
//           <input
//             type="text"
//             id="club"
//             placeholder="Enter club name here..."
//             value={rolePlayerDetails.club}
//             onChange={this.props.handleInput}
//           />
//         </div>
//         <div>
//           Phone Number:
//           <input
//             type="text"
//             id="phonenumber"
//             placeholder="Enter phone number here..."
//             value={rolePlayerDetails.phoneNumber}
//             onChange={this.props.handleInput}
//           />
//         </div>
//         <button
//           type="submit"
//           onClick={() => this.props.saveInput(rolePlayerDetails.name)}
//         >
//           Save
//         </button>
//       </div>
//     );
//   }
// }

// export default RolePlayerDetails;
