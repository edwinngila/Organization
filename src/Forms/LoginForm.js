import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Backdrop, Button, CircularProgress, Fade, FormControl, FormGroup, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { useState } from "react";
import { Container, Form } from "react-bootstrap"
import { Link } from "react-router-dom";

const LoginForm =()=>{
    const[Password,setPassword]=useState('');
    const[Email,setEmail]=useState('');
    const[emailError,setEmailError]=useState('');
    const[passwordError,setPasswordError]=useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [OpenLoader, setOpenLoader] = useState(false);

    /**Visibility for the password field */
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    }

    const handleClose = () => {
        setOpenLoader(false);
      };
    
      const handleOpen = () => {
        setOpenLoader(true);
      };

    const popShow=()=>{
        handleOpen();
        const timeoutId = setTimeout(() => {
        handleClose();
     }, 5000);
    
    return () => {
        clearTimeout(timeoutId);
        handleClose();
      };  
    }
    
    /**API call */
    const LoginRequest= () => {
        //*check the fields are not empty
       if(!Email){
         setEmailError('The filed Email is empty');
       }
       if(!Password){
         setPasswordError('The filed Password is empty');
       }
      else{
         /** Run the API call if the validation is valid */
         popShow();
      }
    }
    return(
        <Container fluid>
            <div style={{height:"100vh"}} className='row d-flex justify-content-center align-items-center'>
                <div style={{backgroundColor:"#D7EFF4",minHeight:"76vh",borderRadius:"10px"}} className='col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4 col-xxl-4'>
                    <Form>
                        <div className='row p-2'>
                            <h1>Logi<span style={{borderBottom:"3px solid black"}}>n</span></h1>
                            <p>PLEASE ENTER TOUR DETAILS TO SIGN IN</p>
                        </div>
                         <div className='row d-flex justify-content-center align-items-center'>
                            <div className='col-11  mt-1'>
                             <div className="row d-flex justify-content-center align-items-center mt-1">
                             <TextField 
                                    className='mt-3' 
                                    error={Boolean(emailError)} 
                                    fullWidth 
                                    helperText={emailError ? emailError : "Enter your Email"} 
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }} 
                                    onSelect={() => {
                                        setEmailError('');
                                    }}
                                    placeholder='name@example.com' 
                                    label="EMAIL ADDRESS" 
                                    variant="outlined" 
                                    /> 

                                            <FormControl
                                                    className="mt-4"   
                                                    fullWidth variant="outlined"
                                                    helperText={passwordError? passwordError:"password should have 8 characters"}                             
                                            >

                                           <InputLabel  error={Boolean(passwordError)} htmlFor="outlined-adornment-password">Password</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    error={Boolean(passwordError)}
                                                    value={Password}
                                                    onChange={
                                                        (e)=>{
                                                            setPassword(e.target.value);
                                                        }
                                                    }
                                                    onSelect={
                                                            ()=>{
                                                                setPasswordError('');
                                                            }
                                                    }
                                                    endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                        >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                    }
                                                    label="Password"
                                                />
                                        </FormControl>
                                    {passwordError && (
                                    <FormHelperText error>{passwordError}</FormHelperText>
                                    )}
                                    {!passwordError && (
                                    <FormHelperText>
                                        Password should have 8 characters
                                    </FormHelperText>
                                    )}
                                    <div className='row'>
                                        <div className='col-12 d-flex align-items-end justify-content-end'>
                                            <span className='mt-1' style={{color:"#41B8D5",fontWeight:"600"}}><Link to='/ResetPassword'><u>Forgot password?</u></Link></span>
                                        </div>
                                    </div>  
                                <FormGroup className='mt-3'>
                                    <div className='row d-flex align-items-center justify-content-center'>
                                        <Button style={{backgroundColor:"#eeff38",color:"black",border:"none"}} className='col-7' onClick={()=>LoginRequest()} >Login</Button>
                                    </div>
                                </FormGroup>
                            </div>
                         </div>
                         </div>
                        <div className='row mt-1 p-3'>
                            <p>Don't have account <span style={{color:"#41B8D5",fontWeight:"600"}}><Link to="/Register">Sign up</Link></span></p>
                        </div>
                    </Form>
                </div>
            </div>
                <Fade in={OpenLoader}>
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={OpenLoader}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </Fade>
        </Container> 
    )
}
export default LoginForm;