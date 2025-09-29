import { useEffect, useState } from "react"
import { axiosInstance } from "../api";

export function Home(){
    const [user, setUser] = useState();
    useEffect(()=>{
      async function fetchUser(){
        const {data} = await axiosInstance.get('/user');
        setUser(data.user.name)
      }
      fetchUser();
    }, []); 

    return <div style={{width:"400px"}}>Welcome Home {user}</div>
}