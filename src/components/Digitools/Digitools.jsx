import React, { use } from 'react';
import Card from '../Card/Card';


const Digitools = ({promiseData,cartAdd,setCartAdd}) => {
    
    const digiTools = use(promiseData);
    // console.log(digiTools);


    return (
        <div>
     

                    {/* cards */}

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6'>
                        {
                        digiTools.map((tools)=>{
                            return(
                                
                                <Card key={tools.id} tools={tools} cartAdd={cartAdd} setCartAdd={setCartAdd}></Card>
                            )



                        }) 

                        }

                    </div>

                    
                            
                    
          </div>
        
    );
};

export default Digitools;