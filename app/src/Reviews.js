import React from 'react';
import { render } from 'react-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackwardIcon from '@material-ui/icons/ArrowBack'; 
import './App.css';
import Divider from '@material-ui/core/Divider';
import SubList from './sublist.js'
import Button from '@material-ui/core/Button'; 
import Typography from '@material-ui/core/Typography';

const pageSize = 3; 


class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: [], start_idx: 0};  
  }

  componentWillMount() {
    const reqOpts = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };

    fetch('http://localhost:8080/api/reviews/published', reqOpts)
      .then(response => response.json())
      .then((data) => {
        let newData = data.map((obj, idx) => {
          return {
            "message": obj.description,
            "stars": (2 - idx % 3) + 3,
          }
        });

        this.setState({data: [...newData, ...this.state.data]}); 
      }) 
      fetch('./data.csv')
      .then((r) => r.text())
      .then(text => {
      let tmp = text.split("\n").map((entry, idx) => {
        return {
          "message": entry,
          "stars": (2 - idx % 3) + 3,
        };
      });
      this.setState({data: [...this.state.data, ...tmp]});
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
        <p></p>
        <Divider/>
      </div>
    );
  }
}

export default Reviews; 
