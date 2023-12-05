import {Container, Form, FormGroup} from "react-bootstrap";
import { Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import {useContext, useState } from "react";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { Link} from "react-router-dom";
import '../css/RegisterTwo.Slide.css';
import { CarouselClick, SnackBar } from "../useContext/UseContext";

const RegisterSlideTwo=()=>{
    
    const[password,setPassword]=useState('');
    const[confirmPassword,setConfirmPassword]=useState('');

    
    const[passwordError,setPasswordError]=useState('');
    const[confirmPasswordError,setConfirmPasswordError]=useState('');

    const{handleNextClick,index}=useContext(CarouselClick);
    const{open,setOpen,setMessage,setSeverity}=useContext(SnackBar);

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [showPasswordConfirmPassword, setShowPasswordConfirmPassword] = useState(false);
    const handleClickShowConfirmPassword = () => setShowPasswordConfirmPassword((show) => !show);
    const handleMouseDownConfirmPassword = (event) => {
        event.preventDefault();
    };

    const RegisterUser=async()=>{
        //*check the fields are not empty
        if(!password){
            setPasswordError('The filed Full Name is empty');
         }
         if(!confirmPassword){
            setConfirmPasswordError('The filed Password is empty');
         }
         else{
             //**Make API call values: firstName, lastName, email*/
 
             //**if Response is 200 then move to the next */
             handleNextClick();

            //**error for red (bad requests) */
            //**warning for yellow (Unorganized) */
            //**success for green (successful) */
            //**success for green (successful) */
            //**info for blue (regular info) */
            setOpen(!open);
            setMessage("Feed back received successfully");
            setSeverity('success')
         }
     }
    return(
        <Container fluid>
                <div style={{minHeight:"100vh"}} className="row">
                   <div className="col-12 col-sm-12 col-md-9 col-lg-7 col-xl-7 col-xxl-7">
                        <div style={{minHeight:"100vh"}} className="row d-flex align-items-center justify-content-center">
                            <Form className="col-11 col-sm-10 col-md-7 col-lg-8 col-xl-8">                      
                                <div className="row d-flex align-items-center justify-content-center">
                                    <h2>CREATE A STRONG PASSWOR<span className="p-1" style={{borderBottom:"3px solid black"}}>D</span></h2>
                                    <p className="mt-3">Create a strong password with a mixture of letters, numbers and symbols</p>
                                </div>

                                {/**Password */}
                                <FormGroup className="mt-3">
                                    <FormControl
                                            className="mt-1"   
                                            fullWidth variant="outlined"
                                            helperText={passwordError? passwordError:"password should have 8 characters"}                             
                                            >
                                            <InputLabel error={Boolean(passwordError)} htmlFor="outlined-adornment-password">Password</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-password"
                                                type={showPassword ? 'text' : 'password'}
                                                error={Boolean(passwordError)}
                                                value={password}
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
                                </FormGroup>

                                {/**confirmPassword */}
                                <FormGroup className="mt-3">
                                    <FormControl
                                            className="mt-1"   
                                            fullWidth variant="outlined"
                                            helperText={confirmPasswordError? confirmPasswordError:"The two passwords should much"}                             
                                            >
                                            <InputLabel error={Boolean(confirmPasswordError)} htmlFor="outlined-adornment-password">confirm Password</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-passwordConfirm"
                                                type={showPasswordConfirmPassword ? 'text' : 'password'}
                                                error={Boolean(confirmPasswordError)}
                                                value={confirmPassword}
                                                onChange={
                                                    (e)=>{
                                                        setConfirmPassword(e.target.value);
                                                    }
                                                }
                                                onSelect={
                                                    ()=>{
                                                        setConfirmPasswordError('');
                                                    }
                                                }
                                                endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowConfirmPassword}
                                                    onMouseDown={handleMouseDownConfirmPassword}
                                                    edge="end"
                                                    >
                                                    {showPasswordConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                                }
                                                label="confirm Password"
                                            />
                                        </FormControl>
                                        {passwordError && (
                                        <FormHelperText error>{confirmPasswordError}</FormHelperText>
                                        )}
                                        {!passwordError && (
                                        <FormHelperText>
                                           The two passwords should much
                                        </FormHelperText>
                                        )}
                                
                                </FormGroup>

                                <FormGroup className="mt-3">
                                    <div className="row d-flex align-items-center justify-content-center">
                                        <Button disabled={index === 6} onClick={RegisterUser} className="col-7" style={{backgroundColor:"#092332",color:"white"}}>Create account</Button>
                                    </div>
                                </FormGroup>

                                <FormGroup className="mt-3">
                                    <p>Already a member <span style={{color:"#2D8BBA"}}><b><Link to="/">login</Link></b></span></p>
                                </FormGroup>
                        </Form>
                        </div>
                   </div>
                   <div style={{backgroundColor:"#3ee8c4"}} className="createOrg col-md-3 col-lg-5 col-xl-5 col-xxl-5">
                        <div style={{backgroundColor:"#3ee8c4",height:"100vh"}} className="d-flex align-items-center justify-content-center">
                            <img className="securityImg createOrgImg" src={"https://media.licdn.com/dms/image/D4D12AQGF2p4K0d24vQ/article-cover_image-shrink_600_2000/0/1694170264418?e=2147483647&v=beta&t=KEGqWLiSu_xUasBsqzzgZSTFbXIIx_HFEwjahlzmMHs"} alt="img"></img>
                        </div>
                    </div>
                </div>
        </Container>
    )
}
export default RegisterSlideTwo;