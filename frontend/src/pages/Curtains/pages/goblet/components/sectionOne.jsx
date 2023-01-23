import React from 'react'

function SectionOne() {
  return (
    <div className='flex flex-col flex-col-reverse w-full h-full p-10 md:flex-row'>
        <div className="flex flex-col items-center w-full leftsection">
        <div className="w-5/6 pt-10 heading">
            <h1 className='text-5xl font-bold text-[#4A4A4A]'>Goblet Curtains</h1>
        </div>
        <div className="w-5/6 pt-10 paragraph">
            <p className='leading-7'>
            Goblet pleats curtains are a sophisticated heading arrangement that resembles pinch pleated draperies in appearance and are open at the very top and are tucked and folded to resemble a wineglass or a goblet. They are usually suspended from a pole or a track.
            </p>
            <p className='pt-5 leading-7'>
            Goblet curtains look great in modern and contemporary settings. Goblet pleat curtains in opulent materials like velvets or chenilles are a stylish, opulent choice. Curtains with goblet pleats have an opulent appearance. They look stunning when paired with woven or patterned textiles and give a rich, formal appearance. The overall design of goblets with opulent weaved tiebacks pulling back curtains from windows is timeless. Allowing the curtain lace to fall to the floor on either side of the window for a truly opulent appearance. Fluffy headers on the window decoration provide goblet pleats. The finishing touches, buttons, pleats, or chords can be sewn onto the end of the frills which makes it look more appealing!
            </p>
        </div>
        </div>
        <div className="w-full rightsection md:pt-10">
        <img src="/image/resources/Cotton_Twill_Mist.jpg" alt="hello" />
        </div>
    </div>
  )
}

export default SectionOne;