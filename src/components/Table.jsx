import TableBody from "./TableBody";
import useFetch from "./useFetch";
import Modal from "./Modal";
import { useEffect, useState } from "react";

const Table = ({ modal, toggle }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return setUsers(data);
      });
  });

  return (
    <div className="container">
      {modal && (
        <div className="overlay">
          <Modal toggle={toggle} setUsers={setUsers} />
        </div>
      )}

      {!users && <h1>Users Details Loading...</h1>}
      {users && (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th rowSpan={2}>#</th>
              <th rowSpan={2}>Name</th>
              <th colSpan={6}>Address</th>
            </tr>
            <tr>
              <th>Street</th>
              <th>City</th>
              <th>ZipCode</th>
              <th>Suite</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <TableBody data={users} />
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
