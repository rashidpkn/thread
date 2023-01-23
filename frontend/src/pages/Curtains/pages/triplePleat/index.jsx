
import SectionThree from "../../components/sectionThree";
import SectionTwo from "./components/sectionTwo";
import SectionOne from "./components/sectionOne";
import Navbar from "../../../common/Navbar";
import Footer from "../../../common/Footer";

const TriplePleat = () => {
    const curtainsImages = [
        {
            "img": "/image/resources/triple/img-01.png",
            "heading": "Triple Pleat",
            "para": "The Nudes Rustic"
        },
        {
            "img": "/image/resources/triple/img-02.png",
            "heading": "Triple Pleat",
            "para": "Swoon Wool"
        },
        {
            "img": "/image/resources/triple/img-03.png",
            "heading": "Triple Pleat",
            "para": "Swoon Wool"
        },
        {
            "img": "/image/resources/triple/img-04.png",
            "heading": "Triple Pleat",
            "para": "Flax"
        },
        {
            "img": "/image/resources/triple/img-05.png",
            "heading": "Triple Pleat",
            "para": "Swoon Wool"
        },
        {
            "img": "/image/resources/triple/img-06.png",
            "heading": "Triple Pleat",
            "para": "Swoon Wool"
        },
        {
            "img": "/image/resources/triple/img-07.png",
            "heading": "Triple Pleat",
            "para": "The Nudes Flax"
        },
        {
            "img": "/image/resources/triple/img-08.png",
            "heading": "Triple Pleat",
            "para": "The Nudes Vintage"
        },   
        {
            "img": "/image/resources/triple/img-09.png",
            "heading": "Triple Pleat",
            "para": "Flax"
        },  
        {
            "img": "/image/resources/triple/img-010.png",
            "heading": "Triple Pleat",
            "para": "Swoon Wool"
        }
        ,  
        {
            "img": "/image/resources/triple/img-011.png",
            "heading": "Triple Pleat",
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
export default TriplePleat;