import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react';
import EmployeeForm from './EmployeeForm'
import EmployeeDisplay from './EmployeeDisplay'
import axios from 'axios';


export default function Employee() {
     const [open , setOpen] = useState(false)

     //  open dialogbox by onclick Add Employee Butoon
     const handleClickOpen = ()=>{
            setOpen(true);
     }

     // for close the dialog box 
     const handleClose = ()=>{
      setOpen(false);
 }

     const [data, setData] = useState([]);
     const [id , setId] = useState(-1);
     

     const Empdata = async () => {
       const auth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNjg3NDg5NTI3LCJleHAiOjE2ODc0OTEzMjcsImlhdCI6MTY4NzQ4OTUyN30.uB4izY66kgJCuEe8Lw3pfR1-fbZCbuiwKU-Rrq0nsks";;
       const header = {
        headers: 
        {
            Authorization: `Bearer ${auth}`,
            "Content-Type": "application/json",
            Accept: "application/json",
        },
       }

         const api = await axios.get(`http://vikaspvaritas23-001-site1.etempurl.com//api/Employee/GetListByStoreId?storeId=1&pageNo=1&pageSize=1000`,
             {header}
         )
        //  const y = await api.data
        // console.log(y)
        //  if (await y.status === 200) {
          
        //   setData(await y.listResult)
        //  } else {
        //      return
        //  }

        const status = api.data.status;

        if (status === 200) 
        {
          setData(status.listResult)
        } 
        else 
        {
          console.log("Error");
        }

        
     }

useEffect(()=>{
  Empdata();
},[])

     

     //const [data , setData] =  useState([]);   // for add(save) teh data
     //const [id , setId] = useState(-1);        // for edit the data
      

     // for delete functionality
     const removeItem = (id)=>
     {
            let d = [...data].filter((value)=>
            {
                   return value.id !== id;
            })

            setData(d);
     }

     // for edit functionality

       const editItem =(id)=>
       {
              setOpen(true);   // for open the popup for update the data
              setId(id);
       }

  return (
    <div >
     <Button variant='outlined' onClick={handleClickOpen} className='m-3'>
         Add Employee
     </Button>

     <EmployeeForm open = {open} close = {handleClose}
                        data = {data} 
                        setData = {setData} 
                        id={id} setId = {setId} />
     
     <EmployeeDisplay data = {data} removeItem = {removeItem}
                         editItem = {editItem} />
    </div>
  )
}
