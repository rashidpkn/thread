
import SectionThree from "../../components/sectionThree";
import SectionTwo from "./components/sectionTwo";
import SectionOne from "./components/sectionOne";
import Navbar from "../../../common/Navbar";
import Footer from "../../../common/Footer";

const EyeletCurtain = () => {
    const curtainsImages = [
        {
            "img": "/image/resources/eyelet/img-01.png",
            "heading": "Eyelet",
            "para": "Velvet - Teal (longer lead time)"
        },
        {
            "img": "/image/resources/eyelet/img-02.png",
            "heading": "Eyelet",
            "para": "Swoon Wool - Wine"
        },
        {
            "img": "/image/resources/eyelet/img-03.png",
            "heading": "Eyelet",
            "para": "Swoon Wool - Peppered Shadow"
        },
        {
            "img": "/image/resources/eyelet/img-04.png",
            "heading": "Eyelet",
            "para": "Velvet - Silver Pearl (longer lead time)..."
        },
        {
            "img": "/image/resources/eyelet/img-05.png",
            "heading": "Eyelet",
            "para": "Swoon Wool - Dark Night"
        },
        {
            "img": "/image/resources/eyelet/img-06.png",
            "heading": "Eyelet",
            "para": "Velvet - Citrine (longer lead time)"
        },
        {
            "img": "/image/resources/eyelet/img-07.png",
            "heading": "Eyelet",
            "para": "The Nudes Rustic - Fossil (longe..."
        },
        {
            "img": "/image/resources/eyelet/img-08.png",
            "heading": "Eyelet",
            "para": "The Nudes Flax - Jute"
        },   
        {
            "img": "/image/resources/eyelet/img-09.png",
            "heading": "Eyelet",
            "para": "Swoon Wool - Botanical Dreams"
        },  
        {
            "img": "/image/resources/eyelet/img-10.png",
            "heading": "Eyelet",
            "para": "Swoon Wool - Sunrise"
        },
        {
            "img": "/image/resources/eyelet/img-11.png",
            "heading": "Eyelet",
            "para": "The Nudes Rustic - Fossil (longer le"
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
export default EyeletCurtain;