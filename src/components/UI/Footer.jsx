import React from 'react';
import insImg from "../../assets/Instagram.png"
import facebookImg from "../../assets/Facebook.png"
import twitterImg from "../../assets/Twitter.png"

const Footer = () => {
    return (
        <div>
            <div className='mt-10 bg-[#101727] text-white'>
                <footer className="footer sm:footer-horizontal   p-10 ">
  <aside>
    <p className="text-3xl font-bold text-white">DigiTools</p>
    <p>
      Premium digital tools for creators, <br />
      professionals, and businesses. Work smarter <br />
       with our suite of powerful tools.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Product</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Templates</a>
    <a className="link link-hover">Integrations</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Vlog</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Press</a>
  </nav>
  <nav>
    <h6 className="footer-title">Resources</h6>
    <a className="link link-hover">Documentation</a>
    <a className="link link-hover">Help Cente</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Contact</a>
  </nav>
   <nav>
    <h6 className="footer-title">Social links</h6>
    <div className="grid grid-flow-col gap-4">
      <a>
        <img src={insImg} alt="" />
        
      </a>
      <a>
        <img src={facebookImg} alt="" />
        
      </a>
      <a>
        <img src={twitterImg} alt="" />
        
      </a>
    </div>
  </nav>

</footer>

 <hr /> <br />
 <div className='flex flex-col md:flex-row justify-between px-10 '>
    <div>
        <p>© 2026 Digitools. All rights reserved.</p>
    </div>

    <div className='flex gap-4 pb-4'>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p> Cookies</p>

    </div>
 </div>


            </div>
        </div>
    );
};

export default Footer;