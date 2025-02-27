

const SectionTwo = () => {
    return (
        <div className="flex flex-wrap justify-center gap-5 p-10 m-2 bg-gray-100">
        {/* // <div className='flex flex-col w-full h-full md:flex-row md:justify-evenly '> */}
            
            <div className="flex items-center justify-center w-24 h-24 border-2 border-gray-400 img">
                <a href="/curtains">
                    <p className="h-5 ">All curtains</p>
                </a>
            
            </div>
            <div className="relative w-24 h-24 img">
                <a href="/PencilPleatCurtains">
                    <img src="/image/resources/pencil_deselected.svg" alt="My thread" />
                    <span className="absolute p-0 text-xs  bottom-1 left-7">PENCIL</span>
                </a>
            </div>
            <div className="relative w-24 h-24 img">
                
                    <img src="/image/resources/cartridge_selected.svg" alt="My thread" />
                    <span className="absolute p-0 text-xs  bottom-1 left-7">EYELET</span>
               
            </div>
            <div className="relative w-24 h-24 img">
                <a href="/DoublePleatCurtains">
                    <img src="/image/resources/double_pleat_deselected.svg" alt="My thread" />
                    <span className="absolute bottom-0 p-0 text-xs  left-7">DOUBLE PLEAT</span>
                </a>
            </div>
            <div className="relative w-24 h-24 img">
                <a href="/Goblet">
                    <img src="/image/resources/double_pleat_deselected.svg" alt="My thread" />
                    <span className="absolute p-0 text-xs  bottom-1 left-7">GOBLET</span>
                </a>
            </div>
            <div className="relative w-24 h-24 img">
                <a href="/TriplePleatCurtains">
                    <img src="/image/resources/goblet_deselected.svg" alt="My thread" />
                    <span className="absolute bottom-0 p-0 text-xs  left-7">TRIPLE PLEAT</span>
                </a>
            </div>
            
            

        </div>
    )
}
export default SectionTwo;