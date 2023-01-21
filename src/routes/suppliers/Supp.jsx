    import { useLoaderData, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { DataGrid, GridToolbar  } from "@mui/x-data-grid";

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


    return(

        <>
        <h1>Suppliers</h1>

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
