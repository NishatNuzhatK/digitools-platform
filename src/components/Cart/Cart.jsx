import React from 'react';
import img from "../../assets/writing_2327400 1.png"

const Cart = () => {
    return (
        <div className='border border-zinc-400 rounded-2xl m-6 p-10 space-y-3'>
            <h2 className='text-3xl font-bold'>Your cart</h2>
            {/* carts */}
            <div className='border border-base-200 bg-base-200'>
                {/* whole card */}
                <div className='flex flex-row justify-between p-10 items-center'>
            
            <div className='flex flex-row gap-2.5'>
                <div className='bg-white rounded-full overflow-hidden p-3 w-fit'>
                <img className='w-8 h-8 object-cover' src={img} alt="" />
            </div>
            <div>
                <h3 className='text-2xl font-semibold'>Lorem ipsum dolor sit amet.</h3>
                <p className='text-[#627382]'>$10</p>
            </div>

            </div>
            
            <div>
                <p className='btn text-red-500'>Remove</p>
            </div>
        </div>
        {/* end card */}

            </div>

            <div className='flex justify-between p-10'>
                <p className='text-[#627382]'>Total:</p>
                <p className='text-2xl font-semibold'>$10000</p>
            </div>

            <button className='btn w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Proceed To Checkout</button>
        
        </div>
    );
};

export default Cart;