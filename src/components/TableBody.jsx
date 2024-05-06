import { useState } from "react";
import { useEffect } from "react";

const TableBody = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => {
        if (!res.ok) throw new Error("Something went wrong");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const html = users.map((user, index) => {
    return (
      <tr key={user.id}>
        <td>{index + 1}</td>
        <td>{user.fullname}</td>
        <td>{user.address}</td>
        <td>{user.city}</td>
        <td>{user.pincode}</td>
        <td>{user.country}</td>
        <td className="action">
          <img src="src/assets/view.png" alt="" />
          <img src="src/assets/edit.png" alt="" />
          <img src="src/assets/delete.png" alt="" />
        </td>
      </tr>
    );
  });
  return html;
};

export default TableBody;
