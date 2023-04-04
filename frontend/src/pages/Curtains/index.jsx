

import SectionTwo from "./components/sectionTwo";
import SectionThree from "./components/sectionThree";

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const Curtains = () => {
    const curtainsImages = [
        {
            "img": "/image/resources/Velvet_Citrine.jpg",
            "heading": "Eyelet",
            "para": "Velvet - Citrine"
        },
        {
            "img": "/image/resources/Velvet_Teal.jpg",
            "heading": "Eyelet",
            "para": "Velvet - Teal"
        },
        {
            "img": "/image/resources/Cotton_Weave_Star.jpg",
            "heading": "Cartridge",
            "para": "Cotton Weave - Star"
        },
        {
            "img": "/image/resources/Velvet_Silver_Pearl.jpg",
            "heading": "Eyelet",
            "para": "Velvet - Silver Pearl"
        },
        {
            "img": "/image/resources/Cotton_Weave_Apricot.jpg",
            "heading": "Cartridge",
            "para": "Cotton Weave - Apricot"
        },
        {
            "img": "/image/resources/Cotton_Twill_Mist.jpg",
            "heading": "Pencil",
            "para": "Cotton Twill - Mist"
        },
        {
            "img": "/image/resources/Flax_Bay.jpg",
            "heading": "Triple Pleat",
            "para": "Flax - Bay"
        },
        {
            "img": "/image/resources/Flax_Eclipse.jpg",
            "heading": "Triple Pleat",
            "para": "Flax - Eclipse"
        },   
        {
            "img": "/image/resources/Cotton_Weave_Aqu.jpg",
            "heading": "Cartridge",
            "para": "Cotton Weave - Aqua"
        },  
        {
            "img": "/image/resources/Cotton_Twill_Cherry.jpg",
            "heading": "Pencil",
            "para": "Cotton Twill - Cherry"
        }
    ]
    return (
        <div>
            <Navbar />
            
            <SectionTwo />
            <SectionThree curtainsImages={curtainsImages}/>
            <Footer />
        </div>
    )
}
export default Curtains;