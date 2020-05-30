import React, { Component } from "react";
import "../index.css";

class RolePlayerDetails extends Component {
  render() {
    const rolePlayerDetails = this.props.roleplayerdetails;

    return (
      <div className="RolePlayerDetails">
        <div>
          Name:
          <input
            type="text"
            id="name"
            placeholder="Enter name here..."
            value={this.props.currentRolePlayers.name}
            onChange={this.props.handleInput}
          />
        </div>
        <div>
          Title:
          <input
            type="text"
            id="title"
            placeholder="Enter title here..."
            value={this.props.currentRolePlayers.title}
            onChange={this.props.handleInput}
          />
        </div>
        <div>
          Club:
          <input
            type="text"
            id="club"
            placeholder="Enter club name here..."
            value={this.props.currentRolePlayers.club}
            onChange={this.props.handleInput}
          />
        </div>
        <div>
          Phone Number:
          <input
            type="text"
            id="phonenumber"
            placeholder="Enter phone number here..."
            value={this.props.currentRolePlayers.phonenumber}
            onChange={this.props.handleInput}
          />
        </div>
        <button
          type="submit"
          onClick={() =>
            this.props.saveInput(this.props.currentRolePlayers.name)
          }
        >
          Save
        </button>
      </div>
    );
  }
}

export default RolePlayerDetails;
