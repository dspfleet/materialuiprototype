import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    gridContentBox: {
        backgroundColor: '#fff',
        padding: theme.spacing(3),
    },
    gridContent: {
        padding: theme.spacing(3),
    }
  }));

function Items() {
    const classes = useStyles()

    return (
        <>
        <Grid container spacing={0} justify = "center" >
            
            <Grid item xs={12} md={6}  className={classes.gridContent}  > 
                <Typography variant="h4"  >
                Items
                </Typography>
            </Grid>
        </Grid>
        
        <Grid container spacing={0} justify = "center" >
            
            <Grid item xs={12} md={6} className={classes.gridContentBox}  > 
                <Typography  >
                Kenny Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                donec massa sapien faucibus et molestie ac.
                </Typography>
            </Grid>
        </Grid>

        </>
    )
}

export default Items
