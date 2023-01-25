import React from 'react'

function SectionOne() {
  return (
    <div className='flex flex-col flex-col-reverse w-full h-full p-10 md:flex-row'>
        <div className="flex flex-col items-center w-full leftsection">
        <div className="w-5/6 pt-10 heading">
            <h1 className='text-5xl font-bold text-[#4A4A4A]'>Triple Pleat Curtains</h1>
        </div>
        <div className="w-5/6 pt-10 paragraph">
            <p className='leading-7'>
            Triple pleat curtains offer a traditional, formal look that makes them perfect for living or dining rooms and it looks best when hung on a pole as opposed to a track since they have a precisely tailored appearance. The ideal way to hang triple-pleated curtains is on curtain rods. It is strongly recommended to install the curtain poles before taking the measures on the fabrics. A few of the amazing features of triple pleat window treatment are:
            <ul className="list-disc">
              <li>appear best on their own but can be used beneath bedsteads and side skirts</li>
              <li>suitable for the majority of types of fabric</li>
              <li>all curtain lengths and room heights are compatible</li>
              <li>perfectly suited to both traditional and modern residences </li>
              <li>when using lengthier textiles, the drape can be created into a single, long piece that runs uninterrupted.</li>
            </ul>
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