import React, { useState } from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider'; 
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));



export default function Form(props) {
  const [review, setReview] = useState("");
  const [email, setEmail] = useState(""); 
  const classes = useStyles(); 
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (review.length < 10) {
        alert("Review must be longer than 10 characters");
        return;
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({description: review + "   -   " + email })
    };
    
    fetch('http://localhost:8080/api/reviews', requestOptions)
        .then(response => response.json());
    setReview(""); 
    setEmail(""); 
  }

  return (
    <div className="center_this">

    <form onSubmit={handleSubmit}>     
    <p></p>
      <TextField id="filled-basic" label="Tell us about your experience..." fullWidth variant="filled" value={review} onChange={e => setReview(e.target.value) } />
      <TextField id="filled-basic" label="PQC Email" variant="filled" fullWidth value={email} onChange={e => setEmail(e.target.value) } />

      <div>
      <p></p>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <p></p>
    </form>
    <Divider />
    </div>
  );
}