import React, { Component } from "react";
import RolePlayerDetails from "./rolePlayerDetails";
import "../index.css";

class RolePlayersRole extends Component {
  render() {
    const roleplayerdetails = this.props.roleplayerdetails;

    return (
      <div>
        <div className="RolePlayersRole">{roleplayerdetails.role}</div>
        <div>
          <RolePlayerDetails roleplayerdetails={roleplayerdetails} />
        </div>
      </div>
    );
  }
}

export default RolePlayersRole;
