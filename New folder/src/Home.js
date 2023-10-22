import React from "react";
import "./Home.css";
import bg from './bg.jpeg';
import {SlGraduation} from 'react-icons/sl'
import {FiVideo} from 'react-icons/fi'
import {SlPeople} from 'react-icons/sl'
import achievement from './vaccine.jpeg'
function Home() {
  return (
    <>
    <div className="home">
      <img
        className="home_img1"
        src={bg}
        alt=""
      />
      <div className="img_text1"> 
      <h1>Bridging the Gap</h1>
       <h4>From comprehensive vaccine information to inclusive trial participation, we're building a platform that bridges the gap between healthcare access, indigenous vaccine innovation, and safeguarding lives in India.</h4></div>
    </div>
    <div className='w-full bg-white py-24'>
    <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
        
        <div className='flex flex-col justify-center '>
            <h1 className='md:leading-[80px] text-3xl font-italic'>Our <span className='text-[#20B486]'>Features</span></h1>
            <p className='text-lg text-gray-600'>Additional features will be introduced over the years</p>
            
            <div className='grid grid-cols-2 py-16'>
                <div className='py-6 flex'>
                    <div className='p-4 bg-[#E9F8F3] rounded-xl'>
                        <SlGraduation 
                            size={30}
                            style={{color:'#1A906B'}}
                        />
                    </div>
                    <div className='px-3'>
                        <h1 className='text-2xl font-semibold'>Comprehensive vaccine information</h1>
                        <p className='text-[#6D737A]'>Centralized and updated the vaccine database with comprehensive information.</p>
                    </div>

                </div>
                <div className='py-6 flex'>
                    <div className='p-4 bg-[#FFFAF5] rounded-xl'>
                        <FiVideo 
                            size={30}
                            style={{color:'#FFC27A'}}
                        />
                    </div>
                    <div className='px-3'>
                        <h1 className='text-2xl font-semibold'>Age-specific vaccine recommendations</h1>
                        <p className='text-[#6D737A]'>Ensure accuracy, reliability, and regular updates of the vaccine information.</p>
                    </div>

                </div>
                <div className='py-6 flex'>
                    <div className='p-4 bg-[#FFEEF0] rounded-xl'>
                        <SlGraduation 
                            size={30}
                            style={{color:'#ED4459'}}
                        />
                    </div>
                    <div className='px-3'>
                        <h1 className='text-2xl font-semibold'>Access to ongoing clinical trials</h1>
                        <p className='text-[#6D737A]'>Collaborate with research institutions and pharmaceutical companies to provide access to clinical trial information.</p>
                    </div>

                </div>
                <div className='py-6 flex'>
                    <div className='p-4 bg-[#F0F7FF] rounded-xl'>
                        <SlPeople 
                            size={30}
                            style={{color:'#0075FD'}}
                        />
                    </div>
                    <div className='px-3'>
                        <h1 className='text-2xl font-semibold'>Partnerships with hospitals and research institutions</h1>
                        <p className='text-[#6D737A]'>Forge alliances with government healthcare initiatives for broader reach and alignment with national vaccination programs.</p>
                    </div>

                </div>

            </div>
       </div>
        
         
         <img  src={achievement} className="m-auto md:order-last  order-first" />
     
    



    </div>
    

</div>
</>
  );
}

export default Home;
