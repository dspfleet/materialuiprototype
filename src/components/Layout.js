import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Grid,InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import BusinessIcon from '@material-ui/icons/Business';
import BarChartIcon from '@material-ui/icons/BarChart';
import OpacityIcon from '@material-ui/icons/Opacity';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import GroupIcon from '@material-ui/icons/Group';
import Avatar from '@material-ui/core/Avatar';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Vehicles from '../Pages/Vehicles';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Items from '../Pages/Items';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: '#fff',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    color: 'rgba(0, 0, 0, 0.54)'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  searchInput:{
    opacity: '0.6',
    padding: '0px 18px',
    fontSize: '1.2rem',
    '&:hover': {
        backgroundColor: '#eee'
    },
    '& .MuiSvgIcon-root': {
        marginRight: '8px'
    },
    border: '1px solid #222', 
    borderRadius: '10px'
    },
  truckButton:{
        color: '#fff',
        borderRadius: '10px',
        backgroundColor: theme.palette.info.light,
    },
  avatar:{
    backgroundColor: theme.palette.info.light,
  },
  nested: {
        paddingLeft: theme.spacing(4),
    },
  gridContent: {
      backgroundColor: '#fff',
      padding: theme.spacing(3),
  }
}));

function Layout(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} >
          <div className={classes.drawerHeader}>
            <Grid container alignItems="center" spacing={2} >
                <Grid item  > 
                    <Avatar className={classes.avatar}>KJ</Avatar>
                </Grid>
                <Grid item > 
                    <Typography>Kenny Jacobson</Typography>
                </Grid>
          </Grid>
          </div>
      </div>
      <Divider />
      <List>
        <ListItem button component={Link} to="/vehicles" selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
            <ListItemIcon> 
                <LocalShippingIcon /> 
            </ListItemIcon>
            <ListItemText primary="Vehicles" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button  component={Link} to="/items"  selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
            <ListItemIcon> 
                <CardTravelIcon /> 
            </ListItemIcon>
            <ListItemText primary="Items" />
        </ListItem>
        <ListItem button selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
            <ListItemIcon> 
                <BusinessIcon /> 
            </ListItemIcon>
            <ListItemText primary="Company" />
        </ListItem>
        <ListItem button selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
            <ListItemIcon> 
                <SupervisedUserCircleIcon /> 
            </ListItemIcon>
            <ListItemText primary="Vendors" />
        </ListItem>
        <ListItem button selected={selectedIndex === 4} onClick={(event) => handleListItemClick(event, 4)}>
            <ListItemIcon> 
                <GroupIcon /> 
            </ListItemIcon>
            <ListItemText primary="Users" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={handleClick}>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItem button className={classes.nested} selected={selectedIndex === 5} onClick={(event) => handleListItemClick(event, 5)}>
                    <ListItemIcon>
                        <OpacityIcon />
                    </ListItemIcon>
                    <ListItemText primary="Oil Change" />
                </ListItem>
                <ListItem button className={classes.nested} selected={selectedIndex === 6} onClick={(event) => handleListItemClick(event, 6)}>
                    <ListItemIcon>
                        <BrokenImageIcon />
                    </ListItemIcon>
                    <ListItemText primary="New Defects" />
                </ListItem>
            </List>
        </Collapse>
      </List>
    </div>
    
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs={9} > 
                <InputBase
                placeholder="Search"
                className={classes.searchInput}
                startAdornment={<SearchIcon />}
                />
            </Grid>
            <Grid item sm></Grid>
            <Grid item > 
                <IconButton className={classes.truckButton}>
                    <LocalShippingIcon/>
                </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Router>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main >
        <div className={classes.toolbar} />
        
        <Switch>
            <Route path="/vehicles">
                <Vehicles/>
            </Route>
            <Route path="/items">
                <Items/>
            </Route>
            <Route path="/">
                <Vehicles/>
            </Route>
        </Switch>

      </main>
      </Router>
    </div>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;
