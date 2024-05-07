import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const EditPage = () => {
  const { id } = useParams();
  const [formsData, setFormData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return setFormData(data);
      });
  }, []);
  console.log(formsData);
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
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formsData),
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="edit-page">
      <h1>Edit Page for {formsData.name}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            name="fullname"
            value={formsData.name}
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
          Update
        </button>
      </form>
    </div>
  );
};

export default EditPage;
