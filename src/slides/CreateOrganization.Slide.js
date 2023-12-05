import { Container, Form} from "react-bootstrap"
import email from '../Img/what-brings-you-here-today-removebg-preview.png';
import { useContext, useState } from "react";
import { CarouselClick} from "../useContext/UseContext";
import { Button, FormGroup, TextField} from "@mui/material";
import { SnackBar } from "../useContext/UseContext";
import '../css/CreateOrganization.css'

const CreateOrganization=()=>{
    const[Name,setName]=useState('');
    const[Address,setAddress]=useState('');
    const[URL,setURL]=useState('');

    const[NameError,setNameError]=useState('');
    const[AddressError,setAddressError]=useState('');
    const[URLError,setURLError]=useState('');

    const{handleNextClick,index}=useContext(CarouselClick);
    const{open,setOpen,setMessage,setSeverity}=useContext(SnackBar);

    const CreateOrganization=()=>{
        if(!Name){
            setNameError("please enter Name")
        }
        if(!Address){
            setAddressError("Please enter Address")
        }
        if(!URL){
            setURLError("Please enter URL")
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
            setMessage("Thanks for the feedback")
            setSeverity("success");
           
        }
    }
    return(
        <Container fluid>
           <div className="row">
                <div className="col-12 col-sm-12 col-md-9 col-lg-7 col-xl-7 col-xxl-7">
                        <div  style={{minHeight:"100vh"}} className="row d-flex align-items-center justify-content-center">
                        
                        <Form className="row d-flex justify-content-center">
                                <div className="col-12 col-sm-9 col-md-9 col-lg-8 col-xl-8 col-xxl-8">
                                    <div className="row d-flex align-items-center justify-content-center">
                                        <h1>Create Organizatio<span className="p-1" style={{borderBottom:"3px solid black"}}>n</span></h1>
                                        <p className="mt-3">GET TO CREATE AN ORGANIZATION</p>
                                    </div>
                                    {/**organization name*/}
                                        <FormGroup>
                                            <TextField
                                            className='mt-3'
                                            fullWidth helperText={NameError? NameError:"Enter organization name"}
                                            onChange={
                                                (e)=>{
                                                    setName(e.target.value)
                                                    }
                                            }
                                            onSelect={
                                                ()=>{
                                                    setNameError('');
                                            }
                                            }
                                            error={Boolean(NameError)}
                                            placeholder='e.g star organization'
                                            label="NAME" 
                                            variant="outlined" /> 
                                        </FormGroup>

                                        {/**Address */}
                                        <FormGroup>
                                            <TextField
                                            className='mt-3'
                                            fullWidth helperText={AddressError? AddressError:"Enter Address"}
                                            onChange={
                                                (e)=>{
                                                    setAddress(e.target.value)
                                                    }
                                            }
                                            onSelect={
                                                ()=>{
                                                    setAddressError('');
                                            }
                                            }
                                            error={Boolean(AddressError)}
                                            placeholder='Address'
                                            label="Address" 
                                            variant="outlined" /> 
                                        </FormGroup>

                                        {/**URL */}
                                        <FormGroup>
                                            <TextField
                                            className='mt-3'
                                            fullWidth 
                                            helperText={URLError? URLError:"Enter your Web site URL"}
                                            onChange={
                                                (e)=>{
                                                    setURL(e.target.value)
                                                    }
                                            }
                                            onSelect={
                                                ()=>{
                                                    setURLError('');
                                            }
                                            }
                                            error={Boolean(URLError)}
                                            placeholder='https://example.com'
                                            label="Web site URL" 
                                            variant="outlined" /> 
                                        </FormGroup> 
                                </div>  
                                <FormGroup className="mt-3">
                                    <div className="row d-flex align-items-center justify-content-center">
                                        <Button disabled={index === 6} onClick={CreateOrganization} className="col-7" style={{backgroundColor:"#092332",color:"white"}}>Next</Button>
                                    </div>
                                </FormGroup>          
                            </Form>
                                                        
                        </div>
                   </div>
                <div style={{backgroundColor:"#eeff38"}} className="col-md-3 col-lg-5 col-xl-5 col-xxl-5 createOrg">
                    <div style={{backgroundColor:"#eeff38"}} className="d-flex align-items-center justify-content-center">
                        <img className="createOrgImg" src={email} alt="img"></img>
                    </div>
                </div>
            </div>
    </Container>
    )
}
export default CreateOrganization