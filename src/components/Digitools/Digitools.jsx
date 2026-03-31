import React, { use } from 'react';
import Card from '../Card/Card';


const Digitools = ({promiseData}) => {
    const digiTools = use(promiseData);
    // console.log(digiTools);


    return (
        <div>
            <div className='mt-16 text-center space-y-2 mb-10'>
                <h2 className='text-3xl font-bold'>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br />
                    to boost your productivity and creativity.</p>

                    {/* cards */}

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6'>
                        {
                        digiTools.map((tools)=>{
                            return(
                                <Card key={tools.id} tools={tools}></Card>
                            )



                        }) 

                        }

                    </div>

                    
                            
                    
          </div>
        </div>
    );
};

export default Digitools;