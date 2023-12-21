import React, { useState } from 'react'
import MyForm from './MyForm';
import Button from '@mui/material/Button';
import DisplayData from './DisplayData';
export default function ParentC() {
    const [open, setOpen] = React.useState(false);

    const [data,setData]= useState([]);

    const [id,setId] = useState(0);


    console.log(data);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const editd = (id)=>{
     //for the edit pop up
      setId(id);
      setOpen(true);


    }

  return (
    <div>
         <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>

      <MyForm open={open} handleClose={handleClose}
        id={id}
        arraydata = {data}
        arraysetData={setData}

        setID={setId}

      />

      <DisplayData rows={data}     changeArray={setData} 
      setID={editd}  />



    </div>
  )
}