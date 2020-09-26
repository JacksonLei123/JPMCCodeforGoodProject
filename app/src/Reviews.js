import React from 'react';
import { render } from 'react-dom';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';




const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));



function SubList(props) {
  const classes = useStyles(); 

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">

      {
        props.entries.map((entry) => {
          return (
            <div>
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
      this.setState({data: tmp});
    });
  }
  handleMvmt = (i) => {
    if (i < 0) {
      this.setState({start_idx: this.state.start_idx - 1}); 
    } else {
      this.setState({start_idx: this.state.start_idx + 1});
    }
  }
  render() {
    return (
      <div className="App">
        <SubList entries={this.state.data.slice(this.state.start_idx, 3)}/>
      </div>
    );
  }
}
 

export default Reviews; 
