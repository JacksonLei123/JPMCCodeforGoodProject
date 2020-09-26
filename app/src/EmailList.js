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



export default function EmailList(props) {
  const [email, setEmail] = useState(""); 
  const classes = useStyles(); 
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    function ValidateEmail(mail) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
            return (true)
        } else {
            return (false)
        }
    }

    if (!ValidateEmail(email)) {
        alert("You entered an invalid email address!"); 
        return;
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email: email})
    };
    
    fetch('http://localhost:8080/api/reviews/email', requestOptions)
        .then(response => response.json());
    setEmail(""); 
  }

  return (
    <div className="center_this">
    <form onSubmit={handleSubmit}>
        
      <TextField id="filled-basic" label="Join our Email List!" variant="filled" value={email} onChange={e => setEmail(e.target.value) } />
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
}