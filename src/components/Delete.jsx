import { useState } from "react";
const Delete = (props) => {
  const id = props.id;
  const [isPending, setIsPending] = useState(false);
  const handleDelete = (event) => {
    fetch("http://localhost:8000/users" + "/" + id, {
      method: "DELETE",
    });

    window.location.reload();
  };
  return <img src="src/assets/delete.png" alt="" onClick={handleDelete} />;
};

export default Delete;
