import React, { useState } from "react";
import {
  Button,
  FormControlLabel,
  TextField, ThemeProvider, createTheme, Radio, RadioGroup, FormControl, FormLabel
} from "@mui/material";
import Profile from "..//assets/profile.png"
import './styles/home.css'
const theme = createTheme({
  palette: {
    primary: {
      main: '#6c25ff', 
    },
  },
});
function Form() {

  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleCreateAccountClick = () => {
    setStep(2);
  };
  const handleStep3Click = () => {
    setStep(3);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    setStep(4);
  };

  return (
    <div>
      {step === 1 && (
        <div className="container">
        <h2 className="head-text">Welcome to Popx</h2>
        <span className="para-text">Lorem Lipsum dolor sit amet consecteputur adisciping elit.</span>
      <Button className="purple-button" variant="contained" onClick={handleStep3Click}>
        Create Account
      </Button>
      <Button className="light-purple-button" variant="contained" onClick={handleCreateAccountClick}>
        Already registered ? Login
      </Button>
    </div>
      )}
      {step === 2 && (

        <div className="container-step2">
        <h3 className="head-text">Sign in to your  <br/>  Popx account</h3>
        <span className="para-text">Lorem Lipsum dolor sit amet consecteputur adisciping elit.</span>
        <ThemeProvider theme={theme}>
      <TextField
        label="Username"
        value={username}
        onChange={handleUsernameChange}
        className="InputBox"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        className="InputBox"
      />
      
    </ThemeProvider>
      <Button className="purple-button" variant="contained" onClick={handleStep3Click}>
        Login
      </Button>
     
    </div>
        
      )}
      {step === 3 && (
        
        <div className="container-step2">
        <h3 className="head-text">Create your <br/> Popx account</h3>
        <ThemeProvider theme={theme}>
           <TextField
        label="Full Name"
        required
        value={fullName}
        onChange={handleFullNameChange}
        className="InputBox"
      />
       <TextField
        label="Phone Number"
        required
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
        className="InputBox"
      />
       <TextField
        label="Email"
            value={email}
            onChange={handleEmailChange}
            required
        className="InputBox"
      />
        {" "}
        <TextField
          label="Password"
          required
            type="password"
            value={password}
            onChange={handlePasswordChange}
        className="InputBox"
      />
       <TextField
        label="Company Name"
        className="InputBox"
        required
      />
        
          <br />
          <FormControl style={{marginTop:"10px"}}>
      <FormLabel required id="demo-row-radio-buttons-group-label">Are you an Agency ?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />

      </RadioGroup>
    </FormControl>

          <br />
          </ThemeProvider>
          <Button className="purple-button" variant="contained" onClick={handleSubmit}>
        Create Account
      </Button>
         
        </div>
      )}
      {step === 4 && (
        <div className="container-step2">
        <h5 className="top-text">Account Settings</h5>
        <div class="row">
  <div class="col">
    <img alt="profile" src={Profile} className="profile-img" />
  </div>
  <div class="col">
    <p>Full Name: {fullName}</p>
    <p>Email: {email}</p>
   
  </div>

</div>
<p className="para-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet libero vitae tellus interdum ornare. Morbi sem velit, convallis quis </p>
        </div>
      )}
    </div>
  );
}
export default Form;
       
