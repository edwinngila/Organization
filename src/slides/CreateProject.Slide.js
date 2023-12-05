import { Container,Form} from "react-bootstrap"
import project from '../Img/interveiw.png';
import { useContext, useState } from "react";
import { CarouselClick} from "../useContext/UseContext";
import { Button, FormGroup, TextField} from "@mui/material";
import { SnackBar } from "../useContext/UseContext";

const Project=()=>{
    const[organizationName,setOrganizationName]=useState('');
    const[ProjectName,setProjectName]=useState('');
    const[ProjectURL,setProjectURL]=useState('');

    const[organizationNameError,setOrganizationNameError]=useState('');
    const[ProjectNameError,setProjectNameError]=useState('');
    const[ProjectURLError,setProjectURLError]=useState('');

    const{handleNextClick,index}=useContext(CarouselClick);
    const{open,setOpen,setMessage,setSeverity}=useContext(SnackBar);
    const CreateOrganization=()=>{
        if(!organizationName){
            setOrganizationNameError("please enter the organization Name")
        }
        if(!ProjectName){
            setProjectNameError("Please enter the Project Name")
        }
        if(!ProjectURL){
            setProjectURLError("Please enter the Project URL")
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
                                        <h1>Create Projec<span className="p-1" style={{borderBottom:"3px solid black"}}>t</span></h1>
                                        <p className="mt-3">GET TO CREATE A PROJECT</p>
                                    </div>
                                    {/**organization name*/}
                                        <FormGroup>
                                            <TextField
                                            className='mt-3'
                                            fullWidth helperText={organizationNameError? organizationNameError:"Enter organization name"}
                                            onChange={
                                                (e)=>{
                                                    setOrganizationName(e.target.value)
                                                    }
                                            }
                                            onSelect={
                                                ()=>{
                                                    setOrganizationNameError('');
                                            }
                                            }
                                            error={Boolean(organizationNameError)}
                                            placeholder='e.g star organization'
                                            id="outlined-basic"
                                            label="Organization name" 
                                            variant="outlined" /> 
                                        </FormGroup>

                                        {/**Project Name */}
                                        <FormGroup>
                                            <TextField
                                            className='mt-3'
                                            fullWidth helperText={ProjectNameError? ProjectNameError:"Enter Project Name"}
                                            onChange={
                                                (e)=>{
                                                    setProjectName(e.target.value)
                                                    }
                                            }
                                            onSelect={
                                                ()=>{
                                                    setProjectNameError('');
                                            }
                                            }
                                            error={Boolean(ProjectNameError)}
                                            placeholder='Project Alpha'
                                            id="outlined-basic"
                                            label="Project Name" 
                                            variant="outlined" /> 
                                        </FormGroup>

                                        {/**Project URL */}
                                        <FormGroup>
                                            <TextField
                                            className='mt-3'
                                            fullWidth 
                                            helperText={ProjectURLError? ProjectURLError:"Enter your Project URL"}
                                            onChange={
                                                (e)=>{
                                                    setProjectURL(e.target.value)
                                                    }
                                            }
                                            onSelect={
                                                ()=>{
                                                    setProjectURLError('');
                                            }
                                            }
                                            error={Boolean(ProjectURLError)}
                                            placeholder='https://example.com'
                                            id="outlined-basic"
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
                <div style={{backgroundColor:"#00CA72"}} className="col-md-3 col-lg-5 col-xl-5 col-xxl-5 createOrg">
                    <div style={{backgroundColor:"#00CA72"}} className="d-flex align-items-center justify-content-center">
                        <img className="createOrgImg" src={project} alt="img"></img>
                    </div>
                </div>
            </div>
    </Container>
    )
}
export default Project;