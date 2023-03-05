import React from 'react'
import { useLoaderData} from 'react-router-dom';

const HotelDetails = () => {
    
  const hotelName = useLoaderData();

  const { title,detailPhoto1 } = hotelName;
  return (
    <>
    <h1>{title}</h1>
    <img className='w-4/1' src={detailPhoto1} alt="" />
    </>
  )
}

export default HotelDetails