import React, {useEffect, useState } from "react";
import axios from "axios";
import AddUser from "../components/Api/users/AddUser";










export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/users").then((data) => {
          console.log(data);
          setUsers(data?.data["hydra:member"]);
        });
      }, []);

    return(
        <>
        <h1> Utilisateurs </h1>
        
        {users.map((item,i) => {
            return (
                <div key={i}> 
                <p>{item?.name}</p></div>
            );
        })}
        
        <AddUser />
        </>
        )
}

