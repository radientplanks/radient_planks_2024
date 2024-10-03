import React from 'react'

const Features = () => {
    const features = [
        {
            img: "/img/durable.svg",
            name: "Highly Durable",
        },
        {
            img: "/img/waterproof.svg",
            name: "Waterproof",
        },
        {
            img: "/img/stain.svg",
            name: "Stain Resistant",
        },
        {
            img: "/img/service.svg",
            name: "27/7 Service",
        },
        {
            img: "/img/impact.svg",
            name: "Impact Resistant",
        },
        {
            img: "/img/soundproof.svg",
            name: "Soundproof",
        },
        {
            img: "/img/easyclean.svg",
            name: "Easy to Clean",
        },
        {
            img: "/img/hygienic.svg",
            name: "Hygienic Surface",
        },
        {
            img: "/img/envfriendly.svg",
            name: "Environmentally Friendly",
        },
        {
            img: "/img/authentic.svg",
            name: "Authentic Appearance",
        },
        {
            img: "/img/installation.svg",
            name: "Easy & Quick Installation",
        },
        {
            img: "/img/lowMaintain.svg",
            name: "Low Maintenance",
        },
    ]
  return (
    <div className='w-full bg-white mt-3 pb-10 md:pb-14 font-workSans flex flex-col items-center'>
        <p className='text-[40px] font-normal text-black pt-6'><b className='text-[40px] font-semibold text-black '>FEATURES</b></p>
        <img src="/img/arrowDesign.png"/>

        <div className='w-full md:grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 flex flex-row flex-wrap gap-x-5 justify-center items-center px-6 gap-y-10  md:gap-y-20 mt-20 '>
  
          {features.map((feature, index)=>{
            return (
             <div className='flex flex-col justify-center items-center '>
                <div className='md:w-[255px] w-[140px] h-[180px]  md:h-[250px] flex flex-col justify-center items-center rounded-[10px] group transition-all duration-500 hover:bg-[#F29622] bg-white shadow-2xl '>
                    <div className='md:w-[239px] w-[124px] h-[138px]  md:h-[190px] flex justify-center items-center  bg-[#F7F7F7] rounded-[4px] '>
                     <img src={feature.img} className='md:w-[100px] md:h-[100px] w-[80px] h-[80px] '/>
                    </div>
                    <p className={`font-medium  ${feature.name === "Environmentally Friendly" || feature.name === "Easy & Quick Installation" ? "text-[10px] md:text-[18px]" : "text-[12px] md:text-[20px]" } mt-2 font-workSans transition-all 
                    duration-500 group-hover:text-white text-[#F29622] `}>{feature.name}</p>
                </div>
              
             
             </div>
            )
          })}



        </div>
    </div>
  )
}

export default Features
