import { alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Search, Mail, Notifications, Cancel } from '@material-ui/icons';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'  
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
        [theme.breakpoints.down('sm')]: {
            display: (props) => (props.open ? 'flex' : 'none'),
            width: '70%'
        }
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    input: {
        marginLeft: theme.spacing(1),
        color: 'white'
    },
    cancel: {
        [theme.breakpoints.up('sm')]:{
            display: 'none'
        }
    },
    icons: {
        alignItems: 'center',
        display: (props) => props.open ? 'none' : 'flex',
       
    },
    badge: {
        marginRight: theme.spacing(2)
    }
}))

function Navbar() {
  const [open, setOpen] = useState(false); 
  const classes = useStyles({open});
  return (
    <div>
      <AppBar position='fixed'>
          <Toolbar className={classes.toolbar}>
              <Typography variant='h6' className={classes.logoLg}>
                  AHMED..
              </Typography>
              <Typography variant='h6' className={classes.logoSm}>
                  ahmed.
              </Typography>
              <div className={classes.search}>
                  <Search />
                  <InputBase placeholder='Search...' className={classes.input} />
                  <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
              </div>
              <div className={classes.icons}>
                  <Search className={classes.searchButton} onClick={() => setOpen(true)} />
              <Badge badgeContent={4} color="secondary" className={classes.badge}>
                  <Mail />
              </Badge>
              <Badge badgeContent={2} color="secondary" className={classes.badge}>
                  <Notifications />
              </Badge>
              <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?size=626&ext=jpg" />
              </div>
          </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
