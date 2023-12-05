import { Button } from "@mui/material"
import { Container } from "react-bootstrap"

const PublishScreen=()=>{
    return(
        <Container fluid>
             <div className="row justify-content-center align-items-center">
                 <Button className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4" style={{backgroundColor:"#092332",color:"white"}}>PUBLISH</Button>
             </div>
        </Container>
    )
}
export default PublishScreen