import React, { Component } from "react";
import "../index.css";

class RolePlayersCategoryRow extends Component {
  render() {
    const category = this.props.category;

    return <div className="RolePlayersCategoryRow">{category}</div>;
  }
}

export default RolePlayersCategoryRow;
