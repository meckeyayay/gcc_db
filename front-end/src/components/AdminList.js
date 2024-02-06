import React, {useState, useEffect} from 'react'
import axios from "axios"

const AdminList = () => {
    const [admin, setAdmin] = useState([]);
    useEffect(() => {
        getAdmin();
    }, [])

    const getAdmin = async () => {
        console.log(2)
        const response = await axios.get("/");
        console.log(3)
        console.log(response.data)
    }

  return (
    <div>AdminList</div>
  )
}

export default AdminList