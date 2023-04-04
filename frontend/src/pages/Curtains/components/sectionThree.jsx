
const SectionThree = ({curtainsImages}) => {

    return (
        // <div className="flex flex-wrap items-center justify-center p-10">
        <div className="flex flex-col w-full h-full p-5  md:p-16 md:flex-row md:flex-wrap md:items-center md:justify-center">
            <div className="flex flex-col items-center justify-center w-full p-5  h-80 md:w-1/3">
                <p className="p-5 bg-gray-100 border-2 border-gray-400">Customise your curtains,<br/> measure up, and get a<br/> quick quote in our online <br/>studio <br/></p>
                
                <div className="">
                    <br/>
                    <button className='w-24 text-sm font-medium text-white duration-300 bg-gray-400 border rounded-2xl hover:text-black hover:bg-white h-7'><a href="/productBuilder">CUSTOMISE</a></button>
                </div>
                
            </div>
            {curtainsImages.map((curtain) => {
            return (
                <div className="w-full p-5 md:w-1/3">
                    <img src={curtain.img} alt="My thread" />
                    <div className="">
                        <h3>{curtain.heading}</h3>
                        <p>{curtain.para}</p>
                    </div>
                </div>
            )
            })}
            
            {/* <div className="w-full p-5 md:w-1/3">
                <img src="/image/resources/Velvet_Citrine.jpg" alt="My thread" />
                <div className="">
                    <h3>Eyelet</h3>
                    <p>Velvet - Citrine (longer lead time)</p>
                </div>
            </div>
            <div className="w-full p-5 md:w-1/3">
                <img src="/image/resources/Velvet_Teal.jpg" alt="My thread" />
                <div>
                    <h3>Eyelet</h3>
                    <p>Velvet - Teal (longer lead time)</p>
                </div>
            </div>
            <div className="w-full p-5 md:w-1/3">
                <img src="/image/resources/Cotton_Weave_Star.jpg" alt="My thread" />
                <div>
                    <h3>Cartridge</h3>
                    <p>Cotton Weave - Star</p>
                </div>
            </div>
            <div className="w-full p-5 md:w-1/3">
                <img src="/image/resources/Velvet_Silver_Pearl.jpg" alt="My thread" />
                <div>
                    <h3>Eyelet</h3>
                    <p>Velvet - Silver Pearl longer lead ti..</p>
                </div>
            </div>
            <div className="w-full p-5 md:w-1/3">
                <img src="/image/resources/Cotton_Weave_Apricot.jpg" alt="My thread" />
                <div>
                    <h3>Cartridge</h3>
                    <p>Cotton Weave - Apricot</p>
                </div>
            </div>
            <div className="w-full md:w-1/3">
                <img src="/image/resources/Cotton_Twill_Mist.jpg" alt="My thread" />
                <div>
                    <h3>Pencil</h3>
                    <p>Cotton Twill - Mist</p>
                </div>
            </div>
            <div className="w-full p-5 md:w-1/3">
                <img src="/image/resources/Flax_Bay.jpg" alt="My thread" />
                <div>
                    <h3>Triple Pleat</h3>
                    <p>Flax - Bay</p>
                </div>
            </div>
            <div className="w-full p-5 md:w-1/3">
                <img src="/image/resources/Flax_Eclipse.jpg" alt="My thread" />
                <div>
                    <h3>Triple Pleat</h3>
                    <p>Flax - Eclipse</p>
                </div>
            </div>
            <div className="w-full p-5 md:w-1/3">
                <img src="/image/resources/Cotton_Weave_Aqu.jpg" alt="My thread" />
                <div>
                    <h3>Cartridge</h3>
                    <p>Cotton Weave - Aqua</p>
                </div>
            </div>
            <div className="w-full p-5 md:w-1/3">
                <img src="/image/resources/Cotton_Twill_Cherry.jpg" alt="My thread" />
                <div>
                    <h3>Pencil</h3>
                    <p>Cotton Twill - Cherry</p>
                </div>
            </div> */}
            {/* <div className="w-full p-5 md:w-1/3">
                <img src="/image/resources/secondary-cta-tile-image.jpg" alt="My thread" />
            </div> */}

        </div>
    )
}
export default SectionThree;