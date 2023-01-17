import React, { useEffect, useState } from "react";
import axios from "axios";
import AddUser from "../components/Api/users/AddUser";
import { GetUsers } from "../components/Api/users/GetUsers";
import { DataGrid, GridToolbar  } from "@mui/x-data-grid";

export default function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    /* axios.get("http://127.0.0.1:8000/api/users").then((data) => {
        console.log(data);
        setUsers(data?.data["hydra:member"]);
      }); */
  
    GetUsers()
      .then((usersResponse) => setUsers(usersResponse))
      .catch((error) => console.log("Error :" + error));
  }, []);

  const rows = users.map((user) => (
    
      {
        
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        phoneNumber : user.phoneNumber
      }
     
      )
  );
  

  return (
    <>
      <h1> Utilisateurs </h1>

      <div style={{ height: 250, width: "1000px" }}>
        <DataGrid
          columns={[
            {field: "id"},
            { field: "username", hideable: false },
            { field: "name" },
            { field: "lastname" },
            {field: "email"},
            {field: "phone"}
          ]}
          rows={users}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </div>
    </>
  );
}
