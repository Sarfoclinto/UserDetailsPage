import { useState } from "react";


const TableBody = ({ users }) => {
  const [update, setUpdate] = useState([]);

  const handledelete = (user, users) => {
    const id = user.id;
    setUpdate(() => {
      return users.filter((theuser) => {
        return theuser.id !== id;
      });
    });
    console.log(update);
  };

  return users.map((user, index) => {
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
          <img
            src="src/assets/delete.png"
            alt=""
            className="delete-btn"
            onClick={() => {
              handledelete(user, users);
            }}
          />
        </td>
      </tr>
    );
  });
};

export default TableBody;
