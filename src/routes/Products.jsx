import AddProduct from "../components/Api/products/AddProduct"
import GetProducts from "../components/Api/products/GetProducts"


export default function Products() {

    return( 
    <>
    <h1> Products </h1>
    <GetProducts />
    <AddProduct />

    </>
    )

}
