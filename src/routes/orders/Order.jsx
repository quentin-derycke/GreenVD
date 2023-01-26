import { useLoaderData, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export default function Orders() {

  const orders = useLoaderData();


  console.log(orders)

  const rows = orders.map(order => {
    return {
      id: order.id,
      address: order.address.houseNumber + ' ' + order.address.street + ' ' + order.address.zipcode + ' ' + order.address.city,
      createdAt: order.createdAt,
      status: order.status,
      items: order.items.length,
      updatedAt: order.updatedAt,
      user: order.user.name + ' ' + order.user.lastname,
      phoneNumber: order.user.phoneNumber
    };
  });

  const columns = [
    { field: 'id', headerName: 'Order ID', width: 150 },
    { field: 'user', headerName: 'User', width: 150 },
    { field: 'phoneNumber', headerName: 'Phone number', width: 150 },
    { field: 'createdAt', headerName: 'Date Created', width: 150 },
    { field: 'updatedAt', headerName: 'Last Update', width: 150 },
    { field: 'address', headerName: 'Address', width: 150 },
    { field: 'items', headerName: 'Items Quantity', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
  ];


  return (

    <Box m="20px">
      <h1>Commandes</h1>

      <Box m="40 0 0 0px" width="150vh" maxHeightXs maxWidth='md'>
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
    </Box>
  )
}
