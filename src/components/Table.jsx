import TableBody from "./TableBody";
import useFetch from "./useFetch";
import { useState } from "react";

const Table = () => {
   const [users, setUsers] = useState([]);
   const url = "http://localhost:8000/users";
  const { data, isLoading, error } = useFetch(url);
  
  return (
    <div className="container">
      {!data && <h1>Users Details Loading...</h1>}
      {data && (
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
            <TableBody data={data} />
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
