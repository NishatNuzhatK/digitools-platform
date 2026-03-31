
import { Suspense } from 'react'
import './App.css'
import Digitools from './components/Digitools/Digitools'
import Active from './components/UI/Active'
import Footer from './components/UI/Footer'
import GetStarted from './components/UI/GetStarted'
import Hero from './components/UI/Hero'

import Navbar from './components/UI/Navbar'
import Pricing from './components/UI/Pricing'


const fetchData = async() =>{
  const res = await fetch("/data.json");
  return res.json();

}


function App() {

  const promiseData = fetchData();
  console.log(promiseData);
  

  return (
    <>

    <Navbar></Navbar>
    <Hero></Hero>
    <Active></Active>


<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>
}>
  <Digitools promiseData={promiseData}></Digitools>

</Suspense>
    


    <GetStarted></GetStarted>
    <Pricing></Pricing>
    <Footer></Footer>



    


      


    </>
  )
}

export default App
