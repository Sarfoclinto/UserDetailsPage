import { useState } from "react";


const TableBody = ({ data }) => {
  return data.map((user, index) => {
    return (
      <tr key={user.id}>
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>{user.address.street}</td>
        <td>{user.address.city}</td>
        <td>{user.address.zipcode}</td>
        <td>{user.address.suite}</td>
        <td className="action">
          <img src="src/assets/view.png" alt="" />
          <img src="src/assets/edit.png" alt="" />
          <img src="src/assets/delete.png" alt="" />
        </td>
      </tr>
    );
  });
};

export default TableBody;
