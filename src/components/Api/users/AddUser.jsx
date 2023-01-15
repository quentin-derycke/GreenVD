import React, { useState } from "react";
import axios from "axios";


export default function AddUser() {

    const [name, setName] = useState({
        name: "",
    });

    const handleChange = (e) => {
        e.preventDefault();

        setName({
            name: e.target.value,
        });
    };

    const submitForm = (e) => { e.preventDefault();

    axios.post(`http://127.0.0.1:8000/api/users` , { name })
    .then((res) =>  {
        console.log(res);
        console.log(res.data);
    });
};

return (
    <div>
    <p>Add Users</p>
    <div>
      <form onSubmit={submitForm}>
        <label>
          User Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  </div>
);
}





