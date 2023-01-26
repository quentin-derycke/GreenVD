import { useLoaderData, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export default function Addresses() {

  const Addresses = useLoaderData();


  console.log(Addresses)

  const rows = Addresses.map(address => {

    return {
      id: address.id,
      houseNumber: address.houseNumber,
      street: address.street,
      city: address.city,
      zipcode: address.zipcode,
      user: address.user

    };
  });

  const columns = [
    { field: 'id', headerName: 'Address ID', width: 150 },
    { field: 'houseNumber', headerName: 'Number', width: 150 },
    { field: 'street', headerName: 'Street', width: 150 },
    { field: 'city', headerName: 'City', width: 150 },
    { field: 'zipcode', headerName: 'Zipcode', width: 150 },
    { field: 'user', headerName: 'User', width: 150 },
    ,
  ];


  return (

    <>
      <h1>Addresses</h1>

      <Box style={{ width: "150vh" }}>
        <DataGrid autoHeight
          columns={columns}
          rows={rows}
          components={{
            Toolbar: GridToolbar,
          }}
          sx={{
            boxShadow: 2,

            border: 2,
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "info.dark",
              fontSize: 16
            },
            "& .MuiDataGrid-toolbarContainer": {
              backgroundColor: "info.dark",
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: "info.dark",
            },
          }}
        />
      </Box>
    </>
  )
}
