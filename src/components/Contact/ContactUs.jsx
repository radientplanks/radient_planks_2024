import React, {useEffect, useState} from 'react'

const ContactUs = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      setIsLoaded(true);
    }, []);
  return (
    <div className='w-full h-screen mt-3 bg-white flex justify-center items-center '>
       <p className={`md:text-[46px] text-[30px] transition-all duration-1000 ${isLoaded && "scale-150"} font-karid `}>Coming Soon!</p>
    </div>
  )
}

export default ContactUs