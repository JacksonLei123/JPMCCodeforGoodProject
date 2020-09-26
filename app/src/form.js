import React, { useState } from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
        body: JSON.stringify({description: review })
    };
    fetch('http://localhost:8080/api/reviews', requestOptions)
        .then(response => response.json());
    setReview(""); 
  }

  return (
    <form onSubmit={handleSubmit}>
        
      <TextField id="filled-basic" label="Filled" variant="filled" value={review} onChange={e => setReview(e.target.value) } >Tell us about your experience...</TextField>
      <input type="submit" value="Submit" />

    </form>
  );
}