import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CancleFLight(p) {
    const [open, setOpen] = React.useState(false);
    const [openBD, setOpenBD] = React.useState(false);
    const [openSB, setOpenSB] = React.useState(false);
    const navigate = useNavigate()
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleAgree = () => {
        setOpenBD(true)
        setTimeout(() => { setOpenBD(false);setOpen(false);p.setOpenSB(true)}, 2000)

    };
    const handleSnackBarClose=()=>{
        setOpenSB(false)
        setOpen(false)
        p.setOpenRes(false)
    }
    return (
        <React.Fragment>
            <Button variant="outlined" sx={{ color: 'red', border: '1px solid red' }} onClick={handleClickOpen}>
                Cancle
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
               
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={openBD}
                // onClick={handleBackDropClose}
                ><CircularProgress color="inherit" />
                </Backdrop>
                <DialogTitle>{`Are You Sure, you want to delete ${p.data.flightno} flight?`}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description" sx={{ color: 'red' }}>
                        this action will permanently delete this flight from database and cannot be rollback
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleAgree}>Agree</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
