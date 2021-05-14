import {  Avatar, Collapse, Divider, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography } from '@material-ui/core';
import { deepOrange, deepPurple, blue } from '@material-ui/core/colors';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import OpacityIcon from '@material-ui/icons/Opacity';
import AlbumIcon from '@material-ui/icons/Album';
import BuildIcon from '@material-ui/icons/Build';
import FlagIcon from '@material-ui/icons/Flag';
import React from 'react'
import LabeledDivider from '../components/LabeledDivider';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '360',
        backgroundColor: theme.palette.background.paper,
    },
     inline: {
        display: 'inline',
    },
    gridContentBox: {
        backgroundColor: '#fff',
        padding: theme.spacing(0),
        
    },
    gridContent: {
        padding: theme.spacing(3),
        backgroundColor: theme.palette.info.dark,
        color: '#fff'
    },
    iconButtonLabel: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '2vh',
        
    },
    buttonLabel:{
        fontSize: '2vh',
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    lightBlue:{
        color : theme.palette.getContrastText(deepPurple[500]) ,
        backgroundColor: theme.palette.info.light,
    },
    blue:{
        color : theme.palette.getContrastText(deepPurple[500]) ,
        backgroundColor: theme.palette.info,
    },
    extraData: {
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
    },
  }));

function Vehicles() {
    const classes = useStyles()
    const [itemNumOpen, setItemNumOpen] = React.useState(0);
    //const [vehicles, setVehicles] = React.useState([1, 2, 3, 4]);
    const vehicles = [1, 2, 3, 4]

    const handleClick = (value) => () => {
        setItemNumOpen(value === itemNumOpen ? 0 : value)
    }

    

    return (
        <>
        <Grid container spacing={0} justify = "center" >
            <Grid item xs={12} md={6}  className={classes.gridContent}  > 
                <Typography variant="h4"  >
                Vehicles
                </Typography>
            </Grid>
        </Grid>
        
        <Grid container spacing={0}  >
            <Grid item md={3}/>
            <Grid item xs={12} md={6} className={classes.gridContentBox}  > 
            
                <List className={classes.root}>
                    <LabeledDivider label='Active'></LabeledDivider>
                    {   
                        vehicles.map((value, index, array) => {
                            let dividerHolder = <span></span>
                            if (array.length - 1 !== index) {
                                dividerHolder = <Divider />
                            }

                        return (
                            <React.Fragment key={`fr-${value}`} >
                                <ListItem button key={`li-${value}`}  onClick={handleClick(value)}>
                                    <ListItemAvatar color="primary">
                                        <Avatar  className={classes.lightBlue}>
                                            <LocalShippingIcon  />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText  primary="YZ- 012" secondary="JTEZU14R268053623" />
                                    <ListItemText className={classes.extraData}  primary="13,455 miles" secondary="11-Apr-2021" />
                                    <ListItemText  primary="401171" secondary="No Damage" />
                                    
                                    
                                </ListItem>
                                <Collapse  in={itemNumOpen === value} timeout='auto' unmountOnExit>
                                    <Grid container spacing={4}  justify = "center"  >
                                        <Grid item >
                                            <IconButton style={{ color: blue[700] }}  classes={{label: classes.iconButtonLabel}}>
                                                <AvTimerIcon fontSize='large'/>
                                                <div className={classes.buttonLabel}>Mileage</div>
                                            </IconButton>
                                        </Grid>
                                        <Grid item >
                                            <IconButton style={{ color: blue[700] }}  classes={{label: classes.iconButtonLabel}}>
                                                <ReportProblemIcon fontSize='large'/>
                                                <div className={classes.buttonLabel}>Damage</div>
                                            </IconButton>
                                        </Grid>
                                        <Grid item >
                                            <IconButton style={{ color: blue[700] }}  classes={{label: classes.iconButtonLabel}}>
                                                <AttachFileIcon fontSize='large'/>
                                                <div className={classes.buttonLabel}>Items</div>
                                            </IconButton>
                                        </Grid>
                                        <Grid item >
                                            <IconButton style={{ color: blue[700] }}  classes={{label: classes.iconButtonLabel}}>
                                                <ErrorOutlineIcon fontSize='large'/>
                                                <div className={classes.buttonLabel}>Details</div>
                                            </IconButton>
                                        </Grid>
                                        <Grid item >
                                            <IconButton style={{ color: blue[700] }}  classes={{label: classes.iconButtonLabel}}>
                                                <OpacityIcon fontSize='large'/>
                                                <div className={classes.buttonLabel}>Oil Change</div>
                                            </IconButton>
                                        </Grid>
                                        <Grid item >
                                            <IconButton style={{ color: blue[700] }}  classes={{label: classes.iconButtonLabel}}>
                                                <AlbumIcon fontSize='large'/>
                                                <div className={classes.buttonLabel}>Tire Change</div>
                                            </IconButton>
                                        </Grid>
                                        <Grid item >
                                            <IconButton style={{ color: blue[700] }}  classes={{label: classes.iconButtonLabel}}>
                                                <BuildIcon fontSize='large'/>
                                                <div className={classes.buttonLabel}>Maintenance</div>
                                            </IconButton>
                                        </Grid>
                                        <Grid item >
                                            <IconButton style={{ color: blue[700] }}  classes={{label: classes.iconButtonLabel}}>
                                                <FlagIcon fontSize='large'/>
                                                <div className={classes.buttonLabel}>Status</div>
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Collapse>
                                {dividerHolder}
                                
                            </React.Fragment>
                        )
                        

                    })}
                    <LabeledDivider label='Inactive'></LabeledDivider>
                    
                    
                </List>
           
                
            </Grid>
        </Grid>

        </>
    )
}

export default Vehicles
