import { useLoaderData, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { DataGrid, GridToolbar  } from "@mui/x-data-grid";

export default function Orders() {

    const orders = useLoaderData();


    console.log(orders)
    console.log(orders[0].id);


    return(

        <>
        <h1>Commandes</h1>

          <Box style={{ width: 1200 }}>
        <DataGrid autoHeight
          columns={[
            {field: "id", headerName: "Identifiant" , width: 150},
            { field: "user" , headerName: "user Name" , width: 150 },
            { field: "items" , headerName: 'Nom', width: 150 },
            {field: "email" , headerName: "Mail", width: 150},
            {field: "phoneNumber" , headerName: 'Téléphone', width: 150},
            {field:'createdAt', headerName: "Date de création", width:150 },
            
          ]}
          
          rows={orders}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </Box>
      </>
    )
}