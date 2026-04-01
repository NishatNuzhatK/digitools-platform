import React from 'react';
import img from "../../assets/writing_2327400 1.png"
import { toast } from 'react-toastify';

const Cart = ({cartAdd,setCartAdd}) => {

    const totalPrice = cartAdd.reduce((sum,item)=>sum+item.price,0);

    const handleRemove = (item)=>{
        const newCart = cartAdd.filter((cart)=>cart.id !=item.id);
        setCartAdd(newCart);

        toast.success('Tool deleted from card!')


    }
    




    return (
        <div className='border border-zinc-400 rounded-2xl m-6 p-10 space-y-3'>
            <h2 className='text-3xl font-bold'>Your cart</h2>
            {/* carts */}
            <div className='border border-base-200 bg-base-200 space-y-3 p-4'>
               

                { cartAdd.length ===0?  (
                                
                                    <p className='text-2xl font-semibold text-center'>Cart is empty</p>
                               
                            )
                            : 
                            (


                    cartAdd.map((item)=>{

                        
                           return(
                            <div className='flex flex-row justify-between p-10 items-center bg-white rounded-2xl'>
            
            <div className='flex flex-row gap-2.5'>
                <div className='bg-white rounded-full overflow-hidden p-3 w-fit'>
                <img className='w-8 h-8 object-cover' src={item.icon} alt="" />
            </div>
            <div>
                <h3 className='text-2xl font-semibold'>{item.name}</h3>
                <p className='text-[#627382]'>${item.price}</p>
            </div>

            </div>
            
            <div>
                <p onClick={()=>handleRemove(item)}
                className='btn text-red-500'>Remove</p>
            </div>
        </div>

                           )
                            
                            

        }

                        )

                        
                        
                        
                    )
        }

 {/* whole card */}

                
        {/* end card */}

            </div>

            <div className='flex justify-between p-10'>
                <p className='text-[#627382]'>Total:</p>
                <p className='text-2xl font-semibold'>${totalPrice}</p>
            </div>

            <button
            onClick={checkoutBtn}
            className='btn w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Proceed To Checkout</button>
        
        </div>
    );
};

export default Cart;