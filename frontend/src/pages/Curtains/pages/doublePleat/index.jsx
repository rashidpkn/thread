
import SectionThree from "../../components/sectionThree";
import SectionTwo from "./components/sectionTwo";
import SectionOne from "./components/sectionOne";
import Navbar from "../../../common/Navbar";
import Footer from "../../../common/Footer";

const DoublePleatCurtain = () => {
    const curtainsImages = [
        {
            "img": "/image/resources/double/img-01.png",
            "heading": "Double Pleat",
            "para": "Swoon Wool - Botanical Dreams"
        },
        {
            "img": "/image/resources/double/img-02.png",
            "heading": "Double Pleat",
            "para": "The Nudes Twill - Sandstone"
        },
        {
            "img": "/image/resources/double/img-03.png",
            "heading": "Double Pleat",
            "para": "Swoon Wool - Wine"
        },
        {
            "img": "/image/resources/double/img-04.png",
            "heading": "Double Pleat",
            "para": "The Nudes Flax - Jute"
        },
        {
            "img": "/image/resources/double/img-05.png",
            "heading": "Double Pleat",
            "para": "The Nudes Vintage - Oatmeal "
        },
        {
            "img": "/image/resources/double/img-06.png",
            "heading": "Double Pleat",
            "para": "Swoon Wool - Peppered Shadow"
        },
        {
            "img": "/image/resources/double/img-07.png",
            "heading": "Double Pleat",
            "para": "The Nudes Rustic - Fossil"
        },  
        {
            "img": "/image/resources/double/img-08.png",
            "heading": "Double Pleat",
            "para": "Swoon Wool - Sunrise"
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
export default DoublePleatCurtain;