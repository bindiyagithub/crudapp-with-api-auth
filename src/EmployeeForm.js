import { useFormik } from "formik";
import React from "react";
import axios from 'axios';
import {Dialog, DialogActions, DialogContent,DialogContentText,
  DialogTitle, TextField ,Button , FormControl ,FormControlLabel ,
    InputLabel , Select , MenuItem ,Checkbox ,FormHelperText}from "@mui/material";

  

import validations from "./Validations";

export default function EmployeeForm({ data , id , setData , 
                                        setId , open ,close}) 
{

  //console.log("jjjjjjj",id);
     let findData = [...data].find((value)=>
     {
           return value.id == id;
     })

  const formik = useFormik({
    initialValues: {

      id:0 ,
      actionBy: 1,
      status: 1,
      storeId: 1,
      name: id > 0 ? findData.name:"" ,
      address: id > 0 ? findData.address: "",
      city: id > 0 ? findData.city: "",
      state: id > 0 ? findData.state: "",
      gender: id > 0 ? findData.gender: "",
      country: id > 0 ? findData.country: "",
      zipcode: id > 0 ? findData.zipcode: "",
      email: id > 0 ? findData.email: "",
      mobileNo: id > 0 ? findData.mobileNo: "",
      userName: id > 0 ? findData.userName: "",
      password: id > 0 ? findData.password: "",
      cardNo: id > 0 ? findData.cardNo: "",
      passPin: id > 0 ? findData.passPin: "",
      isActive : false,
      roleId: 1,
    },
    
    validationSchema : validations,

    enableReinitialize: true,

    onSubmit: async(values) => {    // it is for handleSubmit
      console.log(values);
      const auth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNjg3NDg5NTI3LCJleHAiOjE2ODc0OTEzMjcsImlhdCI6MTY4NzQ4OTUyN30.uB4izY66kgJCuEe8Lw3pfR1-fbZCbuiwKU-Rrq0nsks";
      
    const header = {
        headers: 
        {
            Authorization: `Bearer ${auth}`,
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    };

    
      const api = await axios.post(
        `http://vikaspvaritas23-001-site1.etempurl.com/api/Employee/InsertUpdate`, values,
        
        {header}
      )

      const status = api.data.status;

        if (status === 200) 
        {
          console.log("Success");
        } 
        else 
        {
          console.log("Error");
        }

        let t =[...data];

            if(id > 0)
            {
                t = t.map((v)=>
                {
                     if(v.id == id)
                     {
                             return({...values , id: id});
                     }
                     else
                     {
                          return v;
                     }
                })  
            }
            else
            {
              t.push({...values, id : t.length +1});
            }

             setData(t);
             setId(-1);
             formik.resetForm();   // for reset the data from form 
             close();

    
    

   },
  });

  return (
    <div className="p-2">
      <Dialog open={open} close={close}>
        <DialogTitle> Registration Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your firstname , lastname
            & city , state here. We will send updates occasionally.
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            value={formik.values.name}
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="address"
            name="address"
            value={formik.values.address}
            label="Address"
            type="text"
            fullWidth
            variant="outlined"
            onChange={formik.handleChange}
            multiline 
            

            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          
           />

          <TextField
            autoFocus
            margin="dense"
            id="city"
            name="city"
            value={formik.values.city}
            label="City"
            type="text"
            
            variant="standard"
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />

          <TextField
            autoFocus
            margin="dense"
            id="state"
            name="state"
            value={formik.values.state}
            label="State"
            type="text"
            
            variant="standard" 
            onChange={formik.handleChange}
            error={formik.touched.state && Boolean(formik.errors.state)}
            helperText={formik.touched.city && formik.errors.city}
          />


          <FormControl fullWidth margin="dense">
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              margin="dense"
              label = "Gender"
              id="gender"
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              variant="standard"
            >
              <MenuItem value={1}>Male</MenuItem>
              <MenuItem value={2}>Female</MenuItem>
              <MenuItem value={3}>Other</MenuItem>
            </Select>

               <FormHelperText style={{ color: "#dc3545" }}>
                {formik.touched.gender && formik.errors.gender
                   ? formik.touched.gender && formik.errors.gender
                  : " "}
               </FormHelperText>
          
          </FormControl>

          <TextField
            autoFocus
            margin="dense"
            id="country"
            name="country"
            value={formik.values.country}
            label="Country"
            type="text"
            
            variant="standard"
            onChange={formik.handleChange}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="zipcode"
            name="zipcode"
            value={formik.values.zipcode}
            label="Zip Code"
            type="text"
            
            variant="standard"
            onChange={formik.handleChange}
            error={formik.touched.zipcode && Boolean(formik.errors.zipcode)}
            helperText={formik.touched.zipcode && formik.errors.zipcode}

          />

          <TextField
            autoFocus
            margin="dense"
            id="email"
            name="email"
            value={formik.values.email}
            label="Email"
            type="email"
            
            variant="standard"
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email  && formik.errors.email}
          />

          <TextField
            autoFocus
            margin="dense"
            id="mobileNo"
            name="mobileNo"
            value={formik.values.mobileNo}
            label="Mobile Number"
            type="number"
            
            variant="standard"
            onChange={formik.handleChange}
            error={formik.touched.mobileNo && Boolean(formik.errors.mobileNo)}
            helperText={formik.touched.mobileNo && formik.errors.mobileNo}

          />


          <TextField
            autoFocus
            margin="dense"
            id="userName"
            name="userName"
            value={formik.values.userName}
            label="UserName"
            type="text"
            fullWidth
            variant="standard"
            onChange={formik.handleChange}
            error={formik.touched.mobileNo && Boolean(formik.errors.mobileNo)}
            helperText={formik.touched.mobileNo && formik.errors.mobileNo}
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="password"
            name="password"
            value={formik.values.password}
            label="Password"
            type="password"
            
            variant="standard"
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password  && formik.errors.password}
          />

          <TextField
            autoFocus
            margin="dense"
            id="cardNo"
            name="cardNo"
            value={formik.values.cardNo}
            label="Card Number"
            type="text"
            
            variant="standard"
            onChange={formik.handleChange}
            error={formik.touched.cardNo && Boolean(formik.errors.cardNo)}
            helperText={formik.touched.cardNo  && formik.errors.cardNo}
          />

          <TextField
            autoFocus
            margin="dense"
            id="passPin"
            name="passPin"
            value={formik.values.passPin}
            label="Card PIN"
            type="text"
            
            variant="standard"
            onChange={formik.handleChange}
            error={formik.touched.passPin && Boolean(formik.errors.passPin)}
            helperText={formik.touched.passPin  && formik.errors.passPin}
          />

          <FormControl>
            <Checkbox
                name="isActive"
                checked={formik.values.isActive}
                onChange={formik.handleChange}
                
                color="primary"
              
            
             label="Checkbox"
            />
          <FormHelperText style={{ color: "#dc3545" }}>
            {formik.touched.isActive && formik.errors.isActive
              ? formik.touched.isActive && formik.errors.isActive
              : " "}
          </FormHelperText>
        </FormControl>  


        </DialogContent>
         
         <DialogActions>
          <Button onClick={formik.handleSubmit}>Save</Button>
          <Button onClick = {close}>Cancel</Button>
         </DialogActions>
      </Dialog>
    </div>
  );
}
