
import SectionThree from "../../components/sectionThree";
import SectionTwo from "./components/sectionTwo";
import SectionOne from "./components/sectionOne";
import Navbar from "../../../common/Navbar";
import Footer from "../../../common/Footer";

const Goblet = () => {
    const curtainsImages = [
        {
            "img": "/image/resources/goblet/img-01.png",
            "heading": "Goblet",
            "para": "The Nudes Twill"
        },
        {
            "img": "/image/resources/goblet/img-02.png",
            "heading": "Goblet",
            "para": "The Nudes Natural"
        },
        {
            "img": "/image/resources/goblet/img-03.png",
            "heading": "Goblet",
            "para": "Swoon Wool"
        },
        {
            "img": "/image/resources/goblet/img-04.png",
            "heading": "Goblet",
            "para": "Swoon Wool"
        },
        {
            "img": "/image/resources/goblet/img-05.png",
            "heading": "Goblet",
            "para": "The Nudes Flax"
        },
        
        {
            "img": "/image/resources/goblet/img-06.png",
            "heading": "Goblet",
            "para": "The Nudes Rustic"
        },
        {
            "img": "/image/resources/goblet/img-07.png",
            "heading": "Goblet",
            "para": "Swoon Wool"
        },
        {
            "img": "/image/resources/goblet/img-08.png",
            "heading": "Goblet",
            "para": "Swoon Wool"
        },   
        {
            "img": "/image/resources/goblet/img-09.png",
            "heading": "Goblet",
            "para": "Swoon Wool"
        },  
        {
            "img": "/image/resources/goblet/img-010.png",
            "heading": "Goblet",
            "para": "The Nudes Vintage"
        },
        {
            "img": "/image/resources/goblet/img-011.png",
            "heading": "Goblet",
            "para": "The Nudes Vintage"
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
export default Goblet;