import { Fab, makeStyles, Modal, Tooltip, Container, TextField, MenuItem, RadioGroup, FormControlLabel, Radio, FormLabel, Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { Add as AddIcon } from '@material-ui/icons';
import { useState } from 'react';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const useStyles = makeStyles((theme) => ({
    fab: {
        position: "fixed",
        bottom: 20,
        right: 20
    },
    container: {
        width: 500,
        height: 550,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '100vw',
            height: '100vh'
        }
    },
    form: {
        padding: theme.spacing(2)
    },
    item: {
        marginBottom: theme.spacing(3)
    }
}))

function Add() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <>
    <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
            <AddIcon/>
        </Fab>
    </Tooltip>

    <Modal open={open}>
        <Container className={classes.container}>
            <form className={classes.form} autoComplete="off">
                <div className={classes.item}>
                    <TextField id='standard-basic' label='Title' size='small' style={{width: '100%'}} />
                </div>
                <div className={classes.item}>
                    <TextField id='outlined-multiline-static' multiline rows={4} defaultValue="Tell Your Story.." variant="outlined" label='Description' size='small' style={{width: '100%'}} />
                </div>

                <div className={classes.item}>
                    <TextField select label='Visibility' value='Public'>
                        <MenuItem value='Public'>Public</MenuItem>
                        <MenuItem value='Private'>Private</MenuItem>
                        <MenuItem value='Unlisted'>Unlisted</MenuItem>

                    </TextField>
                </div>
                <div className={classes.item}>
                    <FormLabel component="legend">Who can comment?</FormLabel>
                    <RadioGroup>
                        <FormControlLabel value="Everybody" control={<Radio />} label="Everybody" size='small' />
                        <FormControlLabel value="My Friends" control={<Radio />} label="My Friends" size='small' />
                        <FormControlLabel value="Nobody" control={<Radio />} label="Nobody" size='small' />
                        <FormControlLabel value="Custom" disabled control={<Radio />} label="Custom (Premium)" size='small' />
                    </RadioGroup>
                </div>
                <div className={classes.item}>
                    <Button variant='outlined' color='primary' style={{marginRight: 20}} onClick={() => setOpenAlert(true)}>Create</Button>
                    <Button variant='outlined' color='secondary' onClick={() => setOpen(false)}>Cancel</Button>
                </div>
            </form>
        </Container>
    </Modal>
    <Snackbar open={openAlert} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
        <Alert onClose={handleClose} severity="success">
            This is a success message!
        </Alert>
    </Snackbar>
    </>
  );
}

export default Add;
