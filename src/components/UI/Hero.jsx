import React from 'react';
import bannerImg from "../../assets/banner.png"
import circle from "../../assets/circle.png"
import { FaPlay } from 'react-icons/fa';

const Hero = () => {
    return (
        <div>
            <div className="hero  min-h-screen">
  <div className="hero-content flex-col justify-between gap-14 lg:flex-row-reverse">
    <img
      src={bannerImg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div className='space-y-1'>
        <button className='btn bg-base-300  rounded-2xl'><img src={circle} alt="" /><p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</p></button>
      
      <h1 className="text-5xl font-bold">Supercharge Your <br /> Digital Workflow </h1>
      <p className="py-6 text-[#627382]">
        Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today.

      </p>
      <p className='text-[#627382]'>Explore Products.</p>
      <div className='flex gap-2 pt-1.5'>
        <button className="btn btn-primary rounded-xl">Explore Products</button>
        <button className="btn btn-outline btn-primary rounded-xl"><FaPlay />Watch Demo</button>

      </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;