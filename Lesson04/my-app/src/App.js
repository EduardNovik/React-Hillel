import * as React from "react";
import { useState} from "react";
import Box from "@mui/material/Box";
import { Button, Typography, FormControl, InputLabel, OutlinedInput } from "@mui/material";


function App() {

  const [fname, setFname] = useState()
  const [lname, setLname] = useState()
  const [emailState, setEmailState] = useState()
  const [passwordState, setPasswordState] = useState()

  const validationRules = {
    FirstName() {
      if (fname) {
        const trimmedFname = fname.trim();
       return  ( trimmedFname.length >= 2 && !/\d/.test(trimmedFname)) ? true : false  
      }
    },

    LastName() {
      if (lname) {
        const trimmedLname = lname.trim();
       return  ( trimmedLname.length >= 2 && !/\d/.test(trimmedLname)) ? true : false  
      }
    },

    Email() {
      var emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (emailState) {
        return emailState.match(emailRegex)
          ? true
          : false;
      }
    },

    Password() {
      if (passwordState){
        const trimmedPasswordState = passwordState.trim();
        return passwordState.length >= 6 && passwordState.length <= 10 && /(?=.*[A-Z])/.test(trimmedPasswordState) && /(?=.*\d)/.test(trimmedPasswordState) ? true : false
      }
    },
  };

  return (
      <Box
        sx={{
          "& > :not(style)": { m: 1, width: "60ch" },
          display:'flex',
          alignItems:'center',
          flexDirection:'column'
        }}>
        <Typography variant="h5" sx={{textAlign:'center', pt:'30vh'}}>Fill the form:</Typography> 
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">First name</InputLabel>
          <OutlinedInput id="outlined-basic" label="First name" type='text' defaultValue={fname} onChange={(e)=>setFname(e.target.value)}></OutlinedInput>
          <Typography sx={{color:'red'}} display={fname === undefined || fname.length ===0 ? 'none': 'block' }>{validationRules.FirstName() ? null : 'The first name should contain at least 2 letters (or symbols) without numbers.' }</Typography>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Last name</InputLabel>
          <OutlinedInput id="outlined-basic" label="Last name" type='text' defaultValue={lname} onChange={(e)=>setLname(e.target.value)}></OutlinedInput>
          <Typography sx={{color:'red'}} display={lname === undefined || lname.length ===0 ? 'none': 'block' }>{validationRules.LastName() ? null : 'The last name should contain at least 2 letters (or symbols) without numbers.' }</Typography>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
          <OutlinedInput id="outlined-basic" label="Email" type='email' value={emailState} onChange={(e)=>setEmailState(e.target.value)}></OutlinedInput>
          <Typography sx={{color:'red'}} display={emailState === undefined || emailState.length ===0 ? 'none': 'block'}>{validationRules.Email() ? null : "Please type the valid email address."}</Typography>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput id="outlined-basic" label="Password" type='password' value={passwordState} onChange={(e)=>setPasswordState(e.target.value)}></OutlinedInput>
          <Typography sx={{color:'red'}} display={passwordState === undefined || passwordState.length ===0 ? 'none': 'block'}>{validationRules.Password() ? null : "The password length should be 6-10 characters and contain a minimum of 1 capital letter and 1 number."}</Typography>
        </FormControl>
        <Button variant="contained" disabled = {validationRules.FirstName() && validationRules.LastName() && validationRules.Email() && validationRules.Password()? false : true}>Submit</Button>
      </Box>
  );
}

export default App;
