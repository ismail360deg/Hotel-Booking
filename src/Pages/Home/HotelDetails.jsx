import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../components/hooks/useFetch';

const HotelDetails = () => {
    
    const {id} = useParams();

     // fetch data from database
  const {data:hotelName, loading, error} = useFetch(`http://localhost:5000/category${id}`)

  const { country,detailPhoto1,detailPhoto2,detailPhoto3,detailPhoto4  } = hotelName;

  return (
    <>
    <h1>{country}</h1>
    <img src={detailPhoto1}alt="" />
    <img src={detailPhoto2}alt="" />
    <img src={detailPhoto3}alt="" />
    <img src={detailPhoto4}alt="" />
    {/* <div>{detailPhoto1}</div>
    <div>{detailPhoto2}</div>
    <div>{detailPhoto3}</div>
    <div>{detailPhoto4}</div> */}
    </>
  )
}

export default HotelDetails