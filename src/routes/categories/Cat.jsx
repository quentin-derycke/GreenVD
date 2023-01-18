
import { CardMedia } from "@mui/material";
import { useLoaderData } from "react-router-dom";










export default function Categories() {
   const categories = useLoaderData();


const parentCategories = categories.filter(category => category.parent && category.parent.length > 0);

    return( 
        <>
     <h1> Categories </h1>

     <div>
        {console.log(parentCategories)}
        <div>
            {parentCategories.map(category => (
               
                <div key={category["@id"]}>
                    <h2>{category.name}</h2>
                    <p>{category.description}</p>
                    {category.image ? (
                        <>
                          <CardMedia
                            src={"http://127.0.0.1:8000" + category.image.path}
                            alt={category.image.alt}
                          ></CardMedia>
                        </>
                      ) : (
                        ""
                      )}
                </div>
            ))}
        </div>
    
 </div>

 </>
 
    )
}
