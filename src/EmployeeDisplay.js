import { DataGrid } from '@mui/x-data-grid'
import React from 'react';
import axios from 'axios';
import { Button} from '@mui/material';
import { CheckBox } from '@mui/icons-material';



export default function EmployeeDisplay({data ,removeItem, editItem}) {
     console.log("djjjj",data)

     const EmpdataDelete = async (id) => {
      const auth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNjg3NDg5NTI3LCJleHAiOjE2ODc0OTEzMjcsImlhdCI6MTY4NzQ4OTUyN30.uB4izY66kgJCuEe8Lw3pfR1-fbZCbuiwKU-Rrq0nsks";
      const header = {
        headers: 
        {
            Authorization: `Bearer ${auth}`,
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    };
        const api = await axios.delete(`http://vikaspvaritas23-001-site1.etempurl.com/api/Employee/Delete?id=${id}`,
             {header}
              
            
        )
        // const y = await api.data
        // if (await y.status === 200) 
        // {
        
        // console.log("Success");
        // } 
        // else 
        // {
        //     return
        // }

        const status = api.data.status;

        if (status === 200) 
        {
          console.log("Success");
        } 
        else 
        {
          console.log("Error");
        }
    }

     const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'name', headerName: 'Name', width: 150 },
      { field: 'address', headerName: 'Address', width: 200 },
      { field: 'city', headerName: 'City', width: 120 },
      { field: 'state', headerName: 'State', width: 120 },
      {field: 'gender' , headerName: 'Gender' , width: 70},
      { field: 'country', headerName: 'Country', width: 150 },
      { field: 'zipcode', headerName: 'Zip Code', width: 120 },
      { field: 'email', headerName: 'Email', width: 200 },
      { field: 'mobileNo', headerName: 'Mobile Number', width: 150 },
      { field: 'userName' , headerName: 'UserName' , width:'150'},
      { field: 'password', headerName: 'Password', width: 150 },
      { field: 'cardNo', headerName: 'Card Number', width: 150 },
      { field: 'passPin', headerName: 'Pass Pin', width: 150 },
      
      { field: 'isActive', headerName: 'Active', width: 100, 
           renderCell: (params) => 
          {
            return(<CheckBox checked={params.value} disabled /> )
          }
      },

      {
            field : "delete",
            headerName : "Delete",
            width : 120,

              renderCell: (params) =>{
                console.log(params);
                return(<Button variant='contained' color='warning' 
                        onClick = {()=>
                {
                  removeItem(params.row.id);
                  EmpdataDelete(params.row.id);


                }}> Delete </Button>)
              }
      },

      {
            field : "edit",
            headerName : "Edit",
            width : 120,

            renderCell: (params)=>
            {
                     console.log(params);
                     return(<Button variant='contained' color='secondary'
                        onClick={ ()=>
                     {
                         editItem(params.row.id);
                         //EmpdataDelete(params.row.id);
                     }}> Edit </Button>)
            }
      }


     ]
  return (
    <div style={{ height: 400, width: '90%'}} className='ms-5'>
       <DataGrid
           rows = {data ?? []}
           columns = {columns}
           pageSize = {5}
          rowsPerPageOptions ={[5]}
          checkboxSelection
        >   
       </DataGrid>
    </div>
  )
}
