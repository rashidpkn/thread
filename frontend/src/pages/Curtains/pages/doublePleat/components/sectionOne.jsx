
import React,{useState} from 'react';
function SectionOne() {
  const [readMore,setReadMore]=useState(false);
  const extraContent = <div>

      <p className="extra-content">

            Double pleat curtains are preferred among homeowners since they add a touch of richness and elegance to their interior spaces. These curtains work particularly well in more formal spaces like formal dining rooms and sitting rooms. They offer the look of professionally placed curtains without the expense and are simple to hang. Since they come in so many different designs, hues, and patterns, pencil pleat curtains are extremely adaptable draperies for a perfect window treatment!
            <br/><br/>
            Many homeowners adore the traditional, fitted look that double pleat drapes offer. They successfully combine the elegance of pencil pleat curtains with the simplicity of eyelet curtains. Double pleat panels are frequently a well-liked option for buyers looking for a set of curtains that can be included in a wide range of décor styles, from casual to formal, due to their versatility. 
            

      </p>

  </div>

const linkName=readMore?'Read Less << ':'Read More >> '
  return (
    <div className='flex flex-col flex-col-reverse w-full h-full p-10 md:flex-row'>
        <div className="flex flex-col items-center w-full leftsection">
        <div className="w-5/6 pt-10 heading">
            <h1 className='text-5xl font-bold text-[#4A4A4A]'>Double Pinch Pleat Curtains</h1>
        </div>
        <div className="w-5/6 pt-10 paragraph">
            <p className='leading-7'>
            Double pleat pinch curtains are perfect for giving window furnishings a posh, regal look. A tidy and tailored appearance is achieved by gathering the curtain fabric into standard pleats and installing them in an appropriate position. Double Pinch pleat curtains are quite adaptable as they can be attached to a pole or a track. Double pleat curtains look stunning in any kind of residence owing to their composition. Double pleat curtains have a crispness that works in elegant or formal situations, but they also fit neatly in informal settings. Double Pinch pleat curtains enhance the greatest qualities of a bold pattern, colour, or fabric due to the depth of the folds.
            <br/>
            <button className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></button>

            {readMore && extraContent}
           </p>
        </div>
        </div>
        <div className="w-full rightsection md:pt-10">
        <img src="/image/resources/double-plate.png" alt="hello" />
        </div>
    </div>
  )
}

export default SectionOne;