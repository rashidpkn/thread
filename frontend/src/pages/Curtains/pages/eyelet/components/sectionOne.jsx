import React,{useState} from 'react';
function SectionOne() {
  const [readMore,setReadMore]=useState(false);
  const extraContent = <div>

      <p className="extra-content">

      You can change the amount of layer space needed by using less or more fullness, and they look terrific whether you use a simple or patterned fabric. A reasonably priced option is pencil pleat curtains that are easier to produce than the more elaborate headings that may not take a substantial amount of additional material. Due to their considerably lower price point, they are an affordable choice for many users to employ in their residences.
            <br/><br/>
            Both poles and tracks, which can be made of metal, plastic, or wood, can be used to hang pencil pleat blackout curtains. A more evident drapery rail can be made at the top of the curtain by adjusting the headings of the material up and down. Whatever your style, you'll have a range of options with pencil pleat curtains like grey pencil pleat curtains thanks to their many available colours and materials. Compared to other curtain types, pencil pleat curtains are probably more intricate. This is especially true at the curtain's top, where a number of threaded strings that hold the cloth to the hoops must be undone in order to clean it. 
            

      </p>

  </div>

const linkName=readMore?'Read Less << ':'Read More >> '
  return (
    <div className='flex flex-col flex-col-reverse w-full h-full p-10 md:flex-row'>
        <div className="flex flex-col items-center w-full leftsection">
        <div className="w-5/6 pt-10 heading">
            <h1 className='text-5xl font-bold text-[#4A4A4A]'>Eyelet Curtains</h1>
        </div>
        <div className="w-5/6 pt-10 paragraph">
            <p className='leading-7'>
            One of the most widely used styles of curtain headings is pencil pleats. You've probably seen it everywhere, including homes, offices, resorts, and campuses. Although they are timeless, pencil pleat curtains are also a stylish addition to any room or space. Due to this, they are a popular option for many homeowners, and you can use this wonderful design to enhance any area's aesthetic appeal by attempting to make them stand out. It's the finest solution for ensuring that your property radiates and appears at its best.
            <br/>
            <button className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></button>

            {readMore && extraContent}
           </p>
        </div>
        </div>
        <div className="w-full rightsection md:pt-10">
        <img src="/image/resources/eyelet.png" alt="hello" />
        </div>
    </div>
  )
}

export default SectionOne;