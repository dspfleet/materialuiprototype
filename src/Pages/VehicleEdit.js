import React from 'react'
import { Grid, makeStyles, Typography,IconButton, MenuItem, Avatar, Divider } from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import TextField from '@material-ui/core/TextField';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const vehicleTypes = [
    {
      value: 'step-van',
      label: 'Step Van',
    },
    {
      value: 'van',
      label: 'Van',
    },
    {
      value: 'eighteen-wheeler',
      label: '18 Wheeler',
    },
    {
      value: 'bicycle',
      label: 'Bicycle',
    },
  ];

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
    },
    gridContentBox: {
        backgroundColor: '#fff',
        padding: theme.spacing(3),
    },
    gridContent: {
        padding: theme.spacing(3),
        backgroundColor: theme.palette.info.dark,
        color: '#fff'
    },
    iconButton: {
        color: '#fff'
    },
    iconButtonLabel: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '2vh',
        color: '#fff'
        
    },
    buttonLabel:{
        fontSize: '2vh',
        color: '#fff'
    },
    avatar:{
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(20),
            height: theme.spacing(20),
            fontSize: theme.spacing(10),
        },
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(10),
            height: theme.spacing(10),
            fontSize: theme.spacing(5),
        },
        backgroundColor: theme.palette.info.light,
        
      },
      iconButtonLabel2: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '2vh',
        
    },
    buttonLabel2:{
        fontSize: '2vh',
    },
  }))



function VehicleEdit({id, closeFunction}) {
    const classes = useStyles()
    const [vehicleType, setVehicleType] = React.useState('van');
    //let { id } = useParams()
    //let history = useHistory()

    const handleChange = (event) => {
        setVehicleType(event.target.value);
      }

    const doSavieStuff = () =>{
        alert('I saved some stuff')
        closeFunction()
    }


    return (
        <>
        <Grid container spacing={0} justify = "center" >

            
            <Grid item xs={12} md={6}  className={classes.gridContent}  > 
                <Grid container spacing={0} justify = "center" >
                    <Grid item xs={2} align = "left" >
                        {/* <IconButton onClick={() => history.goBack()} classes={{label: classes.iconButton}}>
                            <CancelIcon fontSize='large'/>
                            <div className={classes.buttonLabel}>Cancel</div>
                        </IconButton> */}

                        <IconButton onClick={closeFunction}  classes={{label: classes.iconButtonLabel}}>
                            <CancelIcon fontSize='large'/>
                            <div className={classes.buttonLabel}>Cancel</div>
                        </IconButton>
                    </Grid>
                    <Grid item  xs={8} >
                        <Typography variant="h4"  align = "center"  >
                        Vehicle - {id}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} align = "right" >
                    <IconButton onClick={doSavieStuff}   classes={{label: classes.iconButtonLabel}}>
                            <CheckCircleIcon fontSize='large'/>
                            <div className={classes.buttonLabel}>Save</div>
                        </IconButton>
                    </Grid>
                </Grid>
                
            </Grid>
        </Grid>
        
        <Grid container spacing={0} justify = "center" >
           
            
            <Grid item xs={12} md={6} className={classes.gridContentBox}  > 
                <Grid container spacing={2}>
                    <Grid item  xs={12} align = "center"  >
                        <Avatar className={classes.avatar}>KJ</Avatar>
                    </Grid>
                    <Grid item  xs={12} align = "center"  >
                        
                        <IconButton   classes={{label: classes.iconButtonLabel2}}>
                            <AddAPhotoIcon fontSize='large'/>
                            <div className={classes.buttonLabel2}>Take Picture</div>
                        </IconButton>
                    </Grid>
                    <Grid item  xs={12}  >
                        <Divider />
                    </Grid>
                </Grid>
            
                <form className={classes.root}>
                    <TextField required id="id" label="Id" defaultValue={`YZ-10${id}`} />
                    <TextField required id="vin" label="VIN" defaultValue="JTEZU14R268053623" />
                    <TextField required id="unitCode" label="Unit Code" defaultValue="401171" />
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Type"
                        value={vehicleType}
                        onChange={handleChange}
                        // helperText="Please select your currency"
                        >
                        {vehicleTypes.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                </form>
                
            </Grid>
        </Grid>

        </>
    )
}

export default VehicleEdit
