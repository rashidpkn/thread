
import SectionThree from "../../components/sectionThree";
import SectionTwo from "./components/sectionTwo";
import SectionOne from "./components/sectionOne";
import Navbar from "../../../common/Navbar";
import Footer from "../../../common/Footer";

const PencilPleatCurtain = () => {
    const curtainsImages = [
        {
            "img": "/image/resources/pencil/img-01.png",
            "heading": "Pencil  ",
            "para": "Cotton Twill"
        },
        {
            "img": "/image/resources/pencil/img-02.png",
            "heading": "Pencil",
            "para": "Cotton Twill"
        },
        {
            "img": "/image/resources/pencil/img-03.png",
            "heading": "Pencil",
            "para": "Swoon Wool"
        },
        {
            "img": "/image/resources/pencil/img-04.png",
            "heading": "Pencil",
            "para": "Flax"
        },
        {
            "img": "/image/resources/pencil/img-05.png",
            "heading": "Pencil",
            "para": "Cotton Twill "
        },
        {
            "img": "/image/resources/pencil/img-06.png",
            "heading": "Pencil",
            "para": "Swoon Wool"
        },
        {
            "img": "/image/resources/pencil/img-07.png",
            "heading": "Pencil",
            "para": "The Nudes Flax"
        },
        {
            "img": "/image/resources/pencil/img-08.png",
            "heading": "Pencil",
            "para": "Swoon Wool"
        },   
        {
            "img": "/image/resources/pencil/img-09.png",
            "heading": "Pencil",
            "para": "Swoon Wool"
        },  
        {
            "img": "/image/resources/pencil/img-010.png",
            "heading": "Pencil",
            "para": "Swoon Wool"
        },  
        {
            "img": "/image/resources/pencil/img-011.png",
            "heading": "Pencil",
            "para": "Swoon Wool"
        }
    ]
    return (
        <div>
         <Navbar />
         <SectionOne />
         <SectionTwo  />
         <SectionThree curtainsImages={curtainsImages}/>
         <Footer />
        </div>
    )
}
export default PencilPleatCurtain;