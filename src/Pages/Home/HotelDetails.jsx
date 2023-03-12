import React from 'react'
import { useLoaderData} from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import { ImLocation2 } from "react-icons/im";
import  '../../Styles/HotelDetails.css';

const HotelDetails = () => {
    
  const hotelName = useLoaderData();

  const {title,photo,detailPhoto1,detailPhoto2,detailPhoto3,detailPhoto4,pool,fitness,avgRating } = hotelName;
  return (
    <>
    <section className='container'>
     <div className='d-flex gap-1'>
     <h6>Turkey</h6> 
     <MdKeyboardArrowRight /> 
      <h6>Istanbul</h6>
      <MdKeyboardArrowRight /> 
      <h6>{title}</h6>
     </div>

    
   <div className='d-flex align-items-center'>
   <h1>{title}</h1>
    <AiFillStar/>
    <AiFillStar/>
    <AiFillStar/>
    <AiFillStar/>
    <AiFillStar/>
    <h6>{avgRating} Star Hotel</h6>
   </div>

    <div className='d-flex'>
    <ImLocation2/>
    <h6>{title}</h6>
    </div>

    <div className='d-flex'>
      <div className="col-6">
      <img className='detailPhoto' src={photo} alt="" />
      </div>
      <div className="col-6">

     <div className='d-flex'>
     <div className="col-6">
      <img className='details' src={detailPhoto1} alt="" />
      </div>
      <div className="col-6">
      <img className='details' src={detailPhoto2} alt="" />
       </div>
     </div>

     <div className='d-flex mt-2'>
     <div className="col-6">
      <img className='details' src={detailPhoto3} alt="" />
      </div>
      <div className="col-6">
      <img className='details' src={detailPhoto4} alt="" />
       </div>
     </div>

      </div>
    </div>

    <h1>{pool}</h1>
    <h1>{fitness}</h1>
    {/* <img className='w-4/1' src={detailPhoto1} alt="" /> */}
    </section>
    </>
  )
}

export default HotelDetails