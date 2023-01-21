import { useLoaderData, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { DataGrid, GridToolbar  } from "@mui/x-data-grid";

export default function Orders() {

    const orders = useLoaderData();


    console.log(orders)

    const rows = orders.map(order => {
      return {
        id: order.id,
        address: order.address.houseNumber + ' '+ order.address.street + ' '+  order.address.zipcode + ' ' + order.address.city ,
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


    return(

        <>
        <h1>Commandes</h1>

          <Box  style={{ width: 1200 }}>
        <DataGrid  autoHeight
          columns={columns}
          rows={rows}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </Box>
      </>
    )
}
