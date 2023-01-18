import React, { useEffect, useState } from "react";
import axios from "axios";
import AddUser from "../components/Api/users/AddUser";
import { GetUsers } from "../components/Api/users/GetUsers";
import { DataGrid, GridToolbar  } from "@mui/x-data-grid";
import { Box } from "@mui/system";
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

  console.log(GetUsers());

 

  

  return (
    <>
      <h1> Utilisateurs </h1>
      <Box style={{ display: 'flex', height: 700, width: 1400 }}>
        <DataGrid
          columns={[
            {field: "id", headerName: "Identifiant" , width: 150},
            { field: "name" , headerName: "Prenom" , width: 150 },
            { field: "lastname" , headerName: 'Nom', width: 150 },
            {field: "email" , headerName: "Mail", width: 150},
            {field: "phoneNumber" , headerName: 'Téléphone', width: 150},
            {field:'createdAt', headerName: "Date de création", width:150 },
            
          ]}
          
          rows={users}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </Box>
    </>
  );
}
