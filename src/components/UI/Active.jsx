import React from 'react';

const Active = () => {
    return (
        
            <div className='border border-red-600 w-full'>
            <div className='w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
                <div className=' text-white grid grid-cols-1 gap-2.5 md:grid-cols-3  text-center py-8 '>
                <div className='space-y-2 '>
                    <h3 className='text-5xl font-bold'>50K+</h3>
                    <p >Active Users</p>
                </div>

                
                  
                <div className='space-y-2 '>
                    <h3 className='text-5xl font-bold'>200+</h3>
                    <p>Premium Tools</p>
                </div>
                <div className='space-y-2 '>
                    <h3 className='text-5xl font-bold'>4.9</h3>
                    <p>Rating</p>
                </div>
            </div>

            </div>
            
        </div>

        
        
    );
};

export default Active;