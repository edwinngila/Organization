import {Container, Form, FormGroup} from "react-bootstrap";
import { Button, TextField } from "@mui/material";
import {useContext, useState } from "react";
import { Link} from "react-router-dom";
import RegisterImg from '../Img/pages.png';
import '../css/Register.Slide.css'
import { CarouselClick, SnackBar } from "../useContext/UseContext";

const RegisterSlideOne=()=>{
    
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[email,setEmail]=useState('');

    const[firstNameError,setFirstNameError]=useState('');
    const[lastNameError,setLastNameError]=useState('');
    const[emailError,setEmailError]=useState('');

    const{handleNextClick,index}=useContext(CarouselClick);
    const{open,setOpen,setMessage,setSeverity}=useContext(SnackBar);

    const RegisterUser=async()=>{
       //*check the fields are not empty
       if(!firstName){
           setFirstNameError('The filed Full Name is empty');
        }
        if(!lastName){
            setLastNameError('The filed Password is empty');
        }
        if(!email){
            setEmailError('The filed Account Name is empty');
        }
        else{
            //**Make API call values: firstName, lastName, email*/

            //**if Response is 200 then move to the next */
            handleNextClick();

            //**This is used to define the screen SnackBars AKA tost */
            
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
                        <div  style={{minHeight:"100vh"}} className="row d-flex  align-items-center justify-content-center">
                            <Form className="col-11 col-sm-10 col-md-9 col-lg-9 col-xl-8">                      
                                <div className="row d-flex align-items-center justify-content-center">
                                    <h1>Sign u<span className="p-1" style={{borderBottom:"3px solid black"}}>p</span></h1>
                                    <p className="mt-1">CREATE ACCOUNT IN SECONDS</p>
                                </div>

                                {/**FIRST NAME */}
                                <FormGroup>
                                    <TextField
                                     className='mt-3'
                                     fullWidth helperText={firstNameError? firstNameError:"Enter your FIRST NAME"}
                                     onChange={
                                        (e)=>{
                                            setFirstName(e.target.value)
                                            }
                                     }
                                     onSelect={
                                        ()=>{
                                            setFirstNameError('');
                                       }
                                     }
                                     error={Boolean(firstNameError.toString())}
                                     placeholder='John'
                                     label="FIRST NAME" 
                                     variant="outlined" /> 
                                </FormGroup>

                                {/**LAST NAME */}
                                <FormGroup>
                                    <TextField
                                     className='mt-3'
                                     fullWidth helperText={lastNameError? lastNameError:"Enter your LAST NAME"}
                                     onChange={
                                        (e)=>{
                                            setLastName(e.target.value)
                                            }
                                     }
                                     onSelect={
                                        ()=>{
                                            setLastNameError('');
                                       }
                                     }
                                     error={Boolean(lastNameError.toString())}
                                     placeholder='Doe'
                                     label="LAST NAME" 
                                     variant="outlined" /> 
                                </FormGroup>

                                {/**EMAIL */}
                                <FormGroup>
                                    <TextField
                                     className='mt-3'
                                     fullWidth 
                                     helperText={emailError? emailError:"Enter your EMAIL"}
                                     onChange={
                                        (e)=>{
                                            setEmail(e.target.value)
                                            }
                                     }
                                     onSelect={
                                        ()=>{
                                            setEmailError('');
                                       }
                                     }
                                     error={Boolean(emailError.toString())}
                                     placeholder='name@example.com'
                                     label="EMAIL" 
                                     variant="outlined" /> 
                                </FormGroup>


                                <FormGroup className="mt-3">
                                    <div className="row d-flex align-items-center justify-content-center">
                                        <Button disabled={index === 6} onClick={RegisterUser} className="col-7" style={{backgroundColor:"#092332",color:"white"}}>Next</Button>
                                    </div>
                                </FormGroup>

                                <FormGroup className="mt-3">
                                    <p>Already a member <span style={{color:"#2D8BBA"}}><b><Link to="/">login</Link></b></span></p>
                                </FormGroup>
                        </Form>
                        </div>
                   </div>
                   <div style={{backgroundColor:"#2D8BBA"}} className="createOrg col-md-3 col-lg-5 col-xl-5 col-xxl-5">
                        <div style={{backgroundColor:"#2D8BBA"}} className=" d-flex align-items-center justify-content-center">
                            <img className="createOrgImg" src={RegisterImg} alt="img"></img>
                        </div>
                   </div>
                </div>
        </Container>
    )
}
export default RegisterSlideOne;