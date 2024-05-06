import { useState } from "react";
import { useEffect } from "react";
import Delete from "./Delete";

const TableBody = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(" https://jsonplaceholder.typicode.com/users")
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
        <td>{user.name || user.fullname}</td>
        <td>{user.address.street || user.fullname}</td>
        <td>{user.address.city || user.address}</td>
        <td>{user.address.zipcode || user.city}</td>
        <td>{user.address.suite || user.pincode}</td>
        <td className="action">
          <img src="src/assets/view.png" alt="" />
          <img src="src/assets/edit.png" alt="" />
          <Delete id={user.id} />
        </td>
      </tr>
    );
  });
  return html;
};

export default TableBody;
