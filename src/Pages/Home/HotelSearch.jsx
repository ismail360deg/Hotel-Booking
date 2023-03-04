import React from 'react';
import '../../Styles/HotelSearch.css';
import Banner from '../../assets/images/Frame 36.png';
// import cardImg from '../../assets/images/Rectangle 3 (4).png';
// import cardImg2 from '../../assets/images/Rectangle 4.png';
// import cardImg3 from '../../assets/images/Rectangle 5.png';
// import cardImg4 from '../../assets/images/Rectangle 6.png';
// import { Link } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/Loading';
import HotelInfos from './HotelInfos';
const HotelSearch = () => {



  const { data: hotelNames, isLoading = [] } = useQuery({
    queryKey: ['hotelPlace'],
    queryFn: async () => {
        const res = await fetch("http://localhost:5000/hotelPlace");
        const data = await res.json();
        console.log(data)
        return data
    }
});

if (isLoading) {
  return <Loading></Loading>
};

  return (
    <section className=''>
        <div className="banner">
            <img src={Banner} alt="" />
        </div>
        <div className="container flying">  
            <div className="row">
            <h3 className='mb-4'>Where are you flying</h3>
                <div className="col-12 d-flex align-items-center justify-content-between">

                  <div className='input-container'>
                    <input type="text" id="form3Example1m" className="input destination" placeholder=" "/>
                  </div>
                  <div>
                    <input type="text" id="form3Example1m" className="input" placeholder=" "/>
                  </div>
                  <div>
                    <input type="text" id="form3Example1m" className="input" placeholder=" "/>
                  </div>
                  <div>
                    <input type="text" id="form3Example1m" className="input" placeholder=" "/>
                  </div>

                </div>

                    <div className='d-flex mt-4 align-items-center justify-content-end'>
                    <h6 className='promo__code'>+ Add Promo code </h6>
                    <button className='show__btn'>Show Places</button>
                    </div>
                </div>
            </div> 

            {/* =========================================== */}

   <section className=' container'>
   <div className="row row-cols-1 row-cols-md-4 g-4 travel__card">

           
{
                hotelNames?.map(hotelName => <HotelInfos
                  key={hotelName._id}
                    hotelName={hotelName}
                ></HotelInfos>)
            }


      </div>
   </section>


    </section>
  )
}

export default HotelSearch