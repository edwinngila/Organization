import { Container,Form} from "react-bootstrap"
import trainer from '../Img/select-what-you-like.png';
import { useContext, useState } from "react";
import { Backdrop, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fade, FormGroup, FormHelperText, TextField, styled} from "@mui/material";
import { SnackBar } from "../useContext/UseContext";
import FileUploads from '../Img/file.png'
import FileSuccessfully from '../Img/checked (1).png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from "react-router-dom";

const Trainer=()=>{
    const[FileUpload,setFileUpload]=useState('');
    const[URL,setURL]=useState('');

    const[FileUploadError,setFileUploadError]=useState('');
    const[URLError,setUrlError]=useState('');
    const history= useNavigate();

    const{open,setOpen,setMessage,setSeverity}=useContext(SnackBar);

    const [openModule, setOpenModule] = useState(false);

    const handleClickOpenModule = () => {
        setOpenModule(true);
    };
  
    const handleCloseModule = () => {
        setOpenModule(false);
        history('/PublishScreen')
    };
  
  

    const [OpenLoader, setOpenLoader] = useState(false);

    const handleClose = () => {
        setOpenLoader(false);
      };
    
    const handleOpen = () => {
        setOpenLoader(true);
    };

    const popShow=async()=>{
        handleOpen();
        const timeoutId =await setTimeout(() => {
        handleClose();
        handleClickOpenModule();
     }, 5000);
    return () => {
        clearTimeout(timeoutId);
        handleClose();
        
      };  
    }
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });

    const CreateOrganization=()=>{
        if(!FileUpload){
            setFileUploadError("please select a file")
        }
        if(!URL){
            setUrlError("Please enter the Project URL")
        }
        else{
            //**open screen lader */
             popShow();
             //**Make API call values: FileUpload,URL*/       

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
                                     <h1>Traine<span className="p-1" style={{borderBottom:"3px solid black"}}>r</span></h1>
                                     <p className="mt-3">UPLOAD PDF AND URL</p>
                                 </div>
                                 {/**organization name*/}
                                     <FormGroup>
                                        <Button onSelect={()=>{setFileUploadError('')}} error={Boolean(FileUploadError)} style={{height:"100px",backgroundColor:"white",color:"black",border:"1px solid #C4C4C4"}} className="col-12" component="label" variant="contained" startIcon={!FileUpload?<img src={FileUploads} alt="Img"></img>:<img src={FileSuccessfully} alt="Img"></img>}>
                                            {!FileUpload?"Upload file":"File uploaded"}
                                            <VisuallyHiddenInput onChange={(e)=>{setFileUpload(e.target.files[0])}} type="file" />
                                        </Button>
                                        <FormHelperText error={Boolean(FileUploadError)}>{FileUpload?<p className="text-success">File Name: {FileUpload.name}</p>:FileUploadError? FileUploadError:"Select a file"}</FormHelperText>
                                    </FormGroup>

                                     {/**Project URL */}
                                     <FormGroup>
                                         <TextField
                                         className='mt-3'
                                         fullWidth 
                                         helperText={URLError? URLError:"Enter your Project URL"}
                                         onChange={
                                             (e)=>{
                                                setURL(e.target.value)
                                                 }
                                         }
                                         onSelect={
                                             ()=>{
                                                setUrlError('');
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
                                     <Button onClick={CreateOrganization} className="col-7" style={{backgroundColor:"#092332",color:"white"}}>Train</Button>
                                 </div>
                             </FormGroup>          
                         </Form>
                                                     
                     </div>
                </div>
             <div style={{backgroundColor:"#FFCC00"}} className="col-md-3 col-lg-5 col-xl-5 col-xxl-5 createOrg">
                 <div style={{backgroundColor:"#FFCC00"}} className="d-flex align-items-center justify-content-center">
                     <img className="createOrgImg" src={trainer} alt="img"></img>
                 </div>
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
        <Dialog
            open={openModule}
            onClose={handleCloseModule}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth={true}
            maxWidth={"xs"}
        >
        <DialogTitle className="text-success" id="alert-dialog-title">
           <CheckCircleIcon sx={{ fontSize: 40 }} style={{ color: '#0AA06E'}}/> {"Successful"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              Training successful
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{backgroundColor:"#092332",color:"white"}} onClick={handleCloseModule}>Evaluate</Button>
        </DialogActions>
      </Dialog>
 </Container>
    )
}
export default Trainer