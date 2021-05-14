import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    wrapper : {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(3),
    },
      
    line : {
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
        flexGrow: '1',
        margin: '0 10px',
    }
  }));

function LabeledDivider(props) {
    const classes = useStyles()
    return (
        <div className={classes.wrapper} >
            <p>{props.label}</p>
            <div className={classes.line} ></div>
        </div>
    )
}

export default LabeledDivider
