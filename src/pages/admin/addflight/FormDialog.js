import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      
      <Button  sx={{ background: 'purple' }} variant="contained" onClick={handleClickOpen}>
        ADD FLIGHT
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <Alert severity="success">This is a success Alert.</Alert>
        <DialogTitle>Enter Flight Details</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{color:'red'}}>
            All Fields are Compulsory
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="flightno"
            name="flightno"
            label="Flight No"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="airlinename"
            name="airlinename"
            label="Airline Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="src_city"
            name="src_city"
            label="Source City"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="dest_city"
            name="dest_city"
            label="Destination City"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="dep_date"
            name="dep_date"
            label="departure Date"
            type="date"
            fullWidth
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="arr_date"
            name="arr_date"
            label="Arrival Date"
            type="date"
           
            fullWidth
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="dep_time"
            name="dep_time"
            label="departure Time"
            type="time"
            
            fullWidth
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="arr_time"
            name="arr_time"
            label="Arraival Time"
            type="time"
            
            fullWidth
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
          />

          {/*  */}
          <TextField
            autoFocus
            required
            margin="dense"
            id="dep_time"
            name="dep_time"
            label="departure Time"
            type="time"
            
            fullWidth
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="arr_time"
            name="arr_time"
            label="Arraival Time"
            type="time"
            
            fullWidth
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
          />
          
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClose}>Cancel</Button>
          <Button variant='contained' type="submit">ADD FLIGHT</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}