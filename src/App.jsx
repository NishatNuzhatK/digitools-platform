
import { Suspense, useState } from 'react'
import './App.css'
import Digitools from './components/Digitools/Digitools'
import Active from './components/UI/Active'
import Footer from './components/UI/Footer'
import GetStarted from './components/UI/GetStarted'
import Hero from './components/UI/Hero'

import Navbar from './components/UI/Navbar'
import Pricing from './components/UI/Pricing'
import ToolsUi from './components/UI/ToolsUi'
import Cart from './components/Cart/Cart'


const fetchData = async() =>{
  const res = await fetch("/data.json");
  return res.json();

}


function App() {

  const promiseData = fetchData();
  console.log(promiseData);

  const [activeTab, setActiveTab] =useState('products');

  

  return (
    <>

    <Navbar></Navbar>
    <Hero></Hero>
    <Active></Active>
    <ToolsUi></ToolsUi>

    {/* buttons toggling */}
    <div className="tabs tabs-box justify-center bg-transparent flex flex-col md:flex-row items-center">
  <input 
  type="radio"
   name="my_tabs_1" 
   className={`tab rounded-full w-40 ${activeTab ==='products'?'bg-primary text-white':''} `}
   aria-label="Products" 
   onClick={()=>setActiveTab('products')}
   defaultChecked/>

  <input 
  type="radio" 
  name="my_tabs_1" 
  className={`tab rounded-full w-40 ${activeTab ==='cart'?'bg-primary text-white':''} `}
   aria-label="Cart (0)" 
   onClick={()=>setActiveTab('cart')}
    />
 
</div>
{
  activeTab==='products' && <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>
}>
  <Digitools promiseData={promiseData}></Digitools>

</Suspense>
}

{
  activeTab==='cart' && <Cart></Cart>
}


    


    <GetStarted></GetStarted>
    <Pricing></Pricing>
    <Footer></Footer>



    


      


    </>
  )
}

export default App
