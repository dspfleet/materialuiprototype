import React from 'react'
import { Grid, makeStyles, Typography,IconButton, Modal, Divider } from '@material-ui/core'
import { useParams, useHistory } from "react-router-dom"
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import EditIcon from '@material-ui/icons/Edit'
import VehicleEdit from './VehicleEdit'
import Avatar from '@material-ui/core/Avatar';
// import LabeledDivider from '../components/LabeledDivider'

const useStyles = makeStyles((theme) => ({
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
  }))

function Vehicle() {
    const [open, setOpen] = React.useState(false);

    const classes = useStyles()
    const { id } = useParams()
    const history = useHistory()

    const handleOpenModal = () => {
        setOpen(true)
    }

    const handleCloseModal = () => {
        setOpen(false)
    }

    return (
        <>
        <Modal open={open} >
            <VehicleEdit id={id} closeFunction={handleCloseModal}/>
        </Modal>
        <Grid container spacing={0} justify = "center" >

            
            <Grid item xs={12} md={6}  className={classes.gridContent}  > 
                <Grid container spacing={0} justify = "center" justifyContent="center" >
                    <Grid item xs={2} align = "left" >
                        <IconButton onClick={() => history.goBack()} classes={{label: classes.iconButton}}>
                            <ArrowBackIcon fontSize='large'/>
                        </IconButton>
                    </Grid>
                    <Grid item  xs={8} >
                        <Typography variant="h4"  align = "center" >
                        Vehicle - {id}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} align = "right" >
                        <IconButton onClick={handleOpenModal} classes={{label: classes.iconButton}}>
                            <EditIcon fontSize='large'/>
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
                    <Grid item  xs={12}  >
                        <Divider />
                    </Grid>
                        
                    <Grid item  xs={12} md={4}>
                        <Typography  variant='caption' >Id</Typography>
                        <Typography  >YZ-01{id}</Typography>
                    </Grid>

                    <Grid item  xs={12} md={4}>
                        <Typography  variant='caption' >VIN</Typography>
                        <Typography  >JTEZU14R268053623</Typography>
                    </Grid>

                    <Grid item  xs={12} md={4}>
                        <Typography  variant='caption' >Unit Code</Typography>
                        <Typography  >401171</Typography>
                    </Grid>

                    <Grid item  xs={12} md={4}>
                        <Typography  variant='caption' >Type</Typography>
                        <Typography  >Step Van</Typography>
                    </Grid>

                    <Grid item  xs={12} md={4}>
                        <Typography  variant='caption' >Make</Typography>
                        <Typography  >Ford</Typography>
                    </Grid>

                    <Grid item  xs={12} md={4}>
                        <Typography  variant='caption' >Model</Typography>
                        <Typography  >F350</Typography>
                    </Grid>

                     <Grid item  xs={12}  >
                        <Divider />
                    </Grid>
                        
                    
                </Grid>

                <Grid container spacing={2}>
                   

                    <Grid item  xs={12} md={4}>
                        <Typography  variant='caption' >Last Mileage Reading</Typography>
                        <Typography  >5/16/2021</Typography>
                    </Grid>

                    <Grid item  xs={12} md={4}>
                        <Typography  variant='caption' >Last Oil Change</Typography>
                        <Typography  >2/10/2021</Typography>
                    </Grid>

                    <Grid item  xs={12}  >
                        <Divider />
                    </Grid>

                </Grid>

                
                
            </Grid>
        </Grid>

        </>
    )
}

export default Vehicle
