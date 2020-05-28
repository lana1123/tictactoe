import React, { Component } from "react";
import "../index.css";

class RolePlayerDetails extends Component {
  render() {
    const rolePlayerDetails = this.props.roleplayerdetails;
    return (
      <div className="RolePlayerDetails">
        <div>Name:{rolePlayerDetails.name}</div>
        <div>Title:{rolePlayerDetails.title}</div>
        <div>Club:{rolePlayerDetails.club}</div>
        <div>Phone Number:{rolePlayerDetails.phoneNumber}</div>
      </div>
    );
  }
}

export default RolePlayerDetails;
