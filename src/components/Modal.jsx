import { useState } from "react";
const Modal = ({ toggle }) => {
  const [newUserName, setNewUserName] = useState({
    name: "",
  });
  const [newUserAddress, setNewUserAddress] = useState({
    street: "",
    city: "",
    zipcode: "",
    suite: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUserName((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    setNewUserAddress((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const newData = {
    name: newUserName.name,
    address: {
      street: newUserAddress.street,
      city: newUserAddress.city,
      zipcode: newUserAddress.zipcode,
      suite: newUserAddress.suite,
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleAdd = () => {
    // fetch("http://localhost:8000/users", {
    //   method: "POST",
    //   body: JSON.stringify(newData),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) =>
    //     // setUsers((prev) => {
    //     //   return [...prev, data];
    //     // })

    //   );
    console.log(data);
  };

  return (
    <div className="addUser-form">
      <div onClick={toggle} className="close">
        &times;
      </div>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div className="add-name">
          <label htmlFor="name">Enter Fullname: </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Fullname"
            required
            value={newUserName.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <br />
        <br />
        <div className="add-address">
          <label htmlFor="street">Enter Street: </label>
          <input
            type="text"
            id="street"
            required
            value={newUserAddress.street}
            name="street"
            placeholder="Enter Street"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="city">Enter City: </label>
          <input
            type="text"
            required
            id="city"
            value={newUserAddress.city}
            name="city"
            placeholder="Enter City"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="suite">Enter Suite: </label>
          <input
            type="text"
            required
            name="suite"
            id="suite"
            placeholder="Enter Suite"
            value={newUserAddress.suite}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="zipcode">Enter Zipcode: </label>
          <input
            type="number"
            required
            name="zipcode"
            placeholder="Enter Zipcode"
            id="zipcode"
            value={newUserAddress.zipcode}
            onChange={handleChange}
          />
        </div>

        <button className="add-user-button" onClick={(handleAdd, toggle)}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Modal;
