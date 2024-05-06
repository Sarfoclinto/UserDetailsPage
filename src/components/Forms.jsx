import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Forms = () => {
  const [formsData, setFormData] = useState({
    fullname: "",
    address: "",
    city: "",
    pincode: "",
    country: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleAdd = () => {
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formsData),
    });
    navigate("/");
  };

  const navigate = useNavigate();
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          className="form-control"
          id="fullname"
          name="fullname"
          value={formsData.fullname}
          placeholder="Enter Full Name"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          className="form-control"
          id="address"
          name="address"
          value={formsData.address}
          placeholder="Enter Address"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          type="text"
          className="form-control"
          id="city"
          name="city"
          value={formsData.city}
          placeholder="Enter City"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <input
          type="text"
          className="form-control"
          id="country"
          name="country"
          value={formsData.country}
          placeholder="Enter Country"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="pincode">Pincode</label>
        <input
          type="number"
          className="form-control"
          name="pincode"
          id="pincode"
          value={formsData.pincode}
          placeholder="Enter Pincode"
          onChange={handleChange}
        />
      </div>

      <button className="btn btn-primary" onClick={handleAdd}>
        Add
      </button>
    </form>
  );
};

export default Forms;
