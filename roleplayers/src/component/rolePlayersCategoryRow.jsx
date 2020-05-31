import React from "react";
import "../index.css";

const RolePlayersCategoryRow = ({ category }) => {
  return <div className="RolePlayersCategoryRow">{category}</div>;
};

export default RolePlayersCategoryRow;

// class RolePlayersCategoryRow extends Component {
//   render() {
//     const category = this.props.category;

//     return <div className="RolePlayersCategoryRow">{category}</div>;
//   }
// }

// export default RolePlayersCategoryRow;
