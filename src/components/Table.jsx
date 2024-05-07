const Table = () => {
  return (
    <div className="container">
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
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Table;
