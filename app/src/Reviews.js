import React from 'react';
import { render } from 'react-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackwardIcon from '@material-ui/icons/ArrowBack'; 
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button'; 
const pageSize = 3; 


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  main: {
    alignContent: 'center',
  },
}));



function SubList(props) {
  const classes = useStyles(); 

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">

      {
        props.entries.map((entry, idx) => {
          return (
            <div id={idx}>
              <ListItem button>
                <ListItemText primary={entry.message}/>
              </ListItem>
              <Divider />
            </div>
          )
        })
      }
    </List>
  );
}
class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {data: [], start_idx: 0};  

  }

  componentWillMount() {
    fetch('./data.csv')
    .then((r) => r.text())
    .then(text => {
      let tmp = text.split("\n").map((entry) => {
        return {
          "message": entry,
        };
      });
      console.log(tmp.length); 
      this.setState({data: tmp});
    });
  }

  handleMvmt = (i) => {
    if (i < 0) {
      if ((this.state.start_idx - 1) >= 0) {
        this.setState({start_idx: this.state.start_idx - 1}); 
      }
    } else {
      if (pageSize * (this.state.start_idx + 1) < this.state.data.length) {
        this.setState({start_idx: this.state.start_idx + 1});
      }
    }
  }


  
  render() {
    let begin = this.state.start_idx * pageSize;
    let end = Math.min(begin + pageSize, this.state.data.length); 
    return (
      <div className="Reviews">
        <SubList entries={this.state.data.slice(begin, end)} />
        <Button variant="contained" color="default" onClick={() => this.handleMvmt(-1)}> <ArrowBackwardIcon/> </Button>
        <Button variant="contained" color="default" onClick={() => this.handleMvmt(1)}> <ArrowForwardIcon/> </Button>
      </div>
    );
  }
}

export default Reviews; 
