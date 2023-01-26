import { useLoaderData, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export default function Suppliers() {

  const suppliers = useLoaderData();


  console.log(suppliers)

  const rows = suppliers.map(supplier => {

    return {
      id: supplier.id,
      name: supplier.name,
      products: supplier.products.length

    };
  });

  const columns = [
    { field: 'id', headerName: 'Supplier ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'products', headerName: 'Products Quantity', width: 150 },
    ,
  ];


  return (

    <>
      <h1>Suppliers</h1>

      <Box style={{ width: "100vh" }}>
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
