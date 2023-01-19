


import { DataGrid, GridToolbar  } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import { useLoaderData } from "react-router-dom";
export default function Users() {



  const users = useLoaderData();
 

  

  return (
    <>
      <h1> Utilisateurs </h1>
      <Box style={{ width: 1200 }}>
        <DataGrid autoHeight
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
