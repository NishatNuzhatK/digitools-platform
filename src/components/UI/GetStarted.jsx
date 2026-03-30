import React from 'react';
import userImg from "../../assets/user.png"
import packageImg from "../../assets/package.png"
import rocketImg from "../../assets/rocket.png"


const GetStarted = () => {
    return (
        <div>

            <div className=' py-8 text-center space-y-4 bg-base-300 pt-20 px-4 w-full overflow-auto container mx-auto'>
                <h2 className='text-3xl font-bold'>Get Started in 3 Steps</h2>
                <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl'>

            {/* card 1 */}

            <div className="card bg-base-100 w-full max-w-sm shadow-sm relative">
                <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-8 h-8 text-center absolute right-3 top-2 text-white'>01</p>
  <figure>
    <div className=' bg-base-300 rounded-full overflow-hidden p-3 mt-14'>
        <img className='w-full h-full object-cover'
      src={userImg}
      alt="Shoes" />

    </div>
    
  </figure>

  <div className="card-body flex justify-center items-center">
    <h2 className="card-title text-2xl font-semibold">Create Account</h2>
    <p className='text-center text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
    
  </div>
</div>

{/* card 2 */}
<div className="card bg-base-100 w-full max-w-sm shadow-sm relative">
                <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-8 h-8 text-center absolute right-3 top-2 text-white'>02</p>
  <figure>
    <div className=' bg-base-300 rounded-full overflow-hidden p-3 mt-14'>
        <img className='w-full h-full object-cover'
      src={packageImg}
      alt="Shoes" />

    </div>
    
  </figure>

  <div className="card-body flex justify-center items-center">
    <h2 className="card-title text-2xl font-semibold">Choose Products</h2>
    <p className='text-center text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
    
  </div>
</div>





{/* card 3 */}
<div className="card bg-base-100 w-full max-w-sm shadow-sm relative">
                <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-8 h-8 text-center absolute right-3 top-2 text-white'>03</p>
  <figure>
    <div className=' bg-base-300 rounded-full overflow-hidden p-3 mt-14'>
        <img className='w-full h-full object-cover'
      src={rocketImg}
      alt="Shoes" />

    </div>
    
  </figure>

  <div className="card-body flex justify-center items-center">
    <h2 className="card-title text-2xl font-semibold">Start Creating</h2>
    <p className='text-center text-[#627382]'>Download and start using your premium tools immediately.</p>
    
  </div>
</div>

           </div>

            </div>
            
           
        </div>
    );
};

export default GetStarted;