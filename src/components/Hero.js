import React, {useState} from 'react';
import './Hero.css';

function Hero() {
  const [location, setLocation] = useState('');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [guest, setGuest] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  //  alert('hi hi Prince');
  }


  return (
   <section>
    <div className='container mx-auto hero-image rounded-3xl'>
        <h1 className='text-center pt-20 font-bold text-4xl md:text-6xl'>
            Find and choose <br />
             where you will live
            </h1>
       <div className='hero-content   rounded-full'>
          <div className='hero-text flex flex-col items-center rounded-3xl bg-white p-2 md:rounded-3xl'>
            <div className='top-content'>
              <a href='/' className='p-6 font-bold bg-arshBg'>Buy</a>
              <a href='/' className='p-6 font-bold bg-white'>Rent</a>
              <a href='/' className='p-6 font-bold bg-arshBg'>Mortgage</a>
            </div>
            <div className='bottom-content mt-7 p-2'>
              <form className='flex flex-col text-center font-bold
               md:flex-row md:text-left' onSubmit={handleSubmit}>
                <div >
                  <label>Location</label>
                  <br/>
                  <input type='text'
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                   placeholder='Where are you going'></input>
                </div>
                <div>
                <label>Check in</label>
                  <br/>
                  <input type='text'
                  value={checkin}
                  onChange={(e) => setCheckin(e.target.value)}
                  placeholder='Add dates'></input>
                </div>
                <div>
                <label>Check out</label>
                  <br/>
                  <input type='text'
                  value={checkout}
                  onChange={(e) => setCheckout(e.target.value)} 
                  placeholder='Add dates'></input>
                </div>
                <div>
                <label>Guests</label>
                  <br/>
                  <input type='text'
                  value={guest}
                  onChange={(e) => setGuest(e.target.value)} 
                  placeholder='Add guests'></input>
                </div>
              </form>
            </div>
          </div>
       </div>
    </div>
   </section>
  )
}

export default Hero;