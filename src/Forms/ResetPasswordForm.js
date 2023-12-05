import { Container, Form} from 'react-bootstrap';
import { useState } from 'react';
import { Button,FormGroup, TextField, Tooltip } from '@mui/material';
import { Link} from 'react-router-dom';


const PasswordReset=()=>{
    const[Email,setEmail]=useState('');
    const[emailError,setEmailError]=useState('');

    const SendLink=async()=>{
         //*check the fields are not empty
         if(!Email){
            setEmailError('The filed Full Name is empty');
        }
        // Email
    }

    return(
        <Container fluid>
        <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-10 col-sm-11 col-md-7 col-lg-5 col-xl-5 mt-5 '>
                <Form>
                    <div className='row p-2 mt-5'>
                        <h1 style={{textAlign:"center"}}>Forgot your passwor<span style={{borderBottom:"3px solid black"}}>d?</span></h1>
                        <p style={{textAlign:"center"}}>We'll email you instructions on how to reset your password</p>
                    </div>
                    <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-11 '>
                         <div className="row d-flex justify-content-center align-items-center mt-1">
                         
                            <Tooltip title="Provide the email you signed up with" placement="top">
                                <TextField fullWidth error={emailError} helperText={emailError? emailError:"Enter your Email"} onChange={(e)=>{setEmail(e.target.value)}} placeholder='name@example.com' label="EMAIL ADDRESS" variant="outlined" 
                                onSelect={
                                    ()=>{
                                     setEmailError('');
                                    }
                                } />
                            </Tooltip>

                            <FormGroup className='mt-2'>
                                <div className='row d-flex align-items-center justify-content-center'>
                                    <Button style={{backgroundColor:"#eeff38",color:"black",border:"none"}} className='col-5 mt-3' onClick={SendLink}>Send link</Button>
                                    <div className='row'>
                                        <div className='col-12 d-flex align-items-center justify-content-center'>
                                            <span className='mt-1' style={{color:"#41B8D5",fontWeight:"600"}}><Link to='/'><u>Login instead?</u></Link></span>
                                        </div>
                                    </div> 
                                </div>
                            </FormGroup>

                        </div>
                     </div>
                    </div>
                </Form>
            </div>
        </div>
    </Container>
    )
}
export default PasswordReset;