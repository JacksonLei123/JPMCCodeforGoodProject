import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      flexDirection: 'row',
    },
    main: {
      alignContent: 'center',
    },
    rating: {
      display: 'flex',
      flexDirection: 'column',
      '& > * + *': {
        marginTop: theme.spacing(1),
      },
    },
    stacked: {
      flexDirection: 'column',
    },
}));

const gridStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        flexDirection: 'column',
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));
  

export default function SubList(props) {
    const classes = useStyles(); 
    const gridStylesHook = gridStyles(); 
    return (
        <Grid container justify="center" spacing={2}>
            {

                props.entries.map((entry, idx) => {
                    return (
                        <Grid key={idx} item>
                            <ListItem button className={classes.stacked}>
                            <Rating name="size-small" defaultValue={entry.stars} size="small" readOnly />
                            <ListItemText primary={entry.message}/>
                            </ListItem>
                        </Grid>
                    )
                })
            }
        </Grid>
    );
  }