import { useState } from "react";
import { Carousel, CarouselItem} from "react-bootstrap"
import RegisterSlideOne from "../slides/Register.SlideOne";
import RegisterSlideTwo from "../slides/Register.SliedTwo";
import { CarouselClick } from "../useContext/UseContext";
import CreateOrganization from "../slides/CreateOrganization.Slide";
import Project from "../slides/CreateProject.Slide";
import Trainer from "../slides/Trainer";

const RenderForms=()=>{
    const [index, setIndex] = useState(0);
    const handlePrevClick = () => {
        setIndex(index - 1);
      }
      const handleNextClick = () => {
        setIndex(index + 1);
      };
    const clickEvents={
        handlePrevClick,handleNextClick,index
      }
    return(
         <>
            <CarouselClick.Provider value={clickEvents}>
                        <Carousel 
                        controls={false} 
                        indicators={false} 
                        activeIndex={index} 
                        onSelect={setIndex} 
                        interval={null} 
                        touch={false}>
                            <CarouselItem>
                               <RegisterSlideOne/>
                            </CarouselItem>

                            <CarouselItem>
                               <RegisterSlideTwo/>
                            </CarouselItem>

                            <CarouselItem>
                                <CreateOrganization/>
                            </CarouselItem>

                            <CarouselItem>
                                 <Project/>
                            </CarouselItem>          

                            <CarouselItem>
                               <Trainer/>
                            </CarouselItem>
                        </Carousel>
            </CarouselClick.Provider>
        </>
    )
}
export default RenderForms;