import React, { useState } from 'react';
import { toast } from 'react-toastify';


const Card = ({tools,cartAdd,setCartAdd}) => {

    const [isBought,setIsBought] = useState(false)

    const handleBuyBtn= () =>{
        setIsBought(true);

        setCartAdd([...cartAdd,tools]);
        console.log(cartAdd);
        toast.success('Tool added to the cart!');

    }

// console.log(tools)





    return (
        <div>
            
                        <div className="card bg-base-100 shadow-sm h-full ">
  <div className="card-body">
    {/* badge */}
    <div className='flex justify-between'>
        <div></div>
        <span className={`badge badge-xs badge-soft h-8 ${tools.tag ==='Best Seller'? ' badge-warning':tools.tag==='Popular'? 'badge-primary':tools.tag==='New'? 'badge-success':''}`}>{tools.tag}</span>

    </div>

{/* image */}
    <div className='bg-base-300 rounded-full overflow-hidden p-3 w-fit'>
        <img className='w-8 h-8 object-cover' src={tools.icon} alt="" />


    </div>
    {/* info */}
    
    <div className="flex justify-between flex-col text-left">
    <h2 className="text-3xl font-bold">{tools.name}</h2>
      <p>{tools.description}</p>
      <span className="text-xl">${tools.price}/{tools.period}</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs text-left">
        { tools.features.map((feature,index)=>(
            <li key={index}>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{feature}</span>
      </li>

        ))
        }
    </ul>
    <div className="mt-6">
      <button
      onClick={handleBuyBtn}
       className="btn btn-primary btn-block rounded-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
        {isBought? 'Added to Cart':'Buy Now'}
        </button>
    </div>
  </div>
</div>

                    
        </div>
    );
};

export default Card;