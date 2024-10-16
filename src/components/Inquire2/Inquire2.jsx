import { X } from "lucide-react";
import React, { useState, useRef } from "react";
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

const Inquire2 = ({inquireOpen, setInquireOpen}) => {
  const [result, setResult] = useState("");
  const contactRef = useRef(null)

  const resetForm = () => {
    contactRef.current.reset();
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/; // Assumes a 10-digit phone number
    return phoneRegex.test(phone);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const phone = formData.get("phone");

    if (!validateEmail(email)) {
      setResult("Invalid email format.");
      return;
    }

    if (!validatePhone(phone)) {
      setResult("Invalid phone number format. Please enter a 10-digit number.");
      return;
    }

    setResult("Sending....");

    formData.append("access_key", VITE_API_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      console.log("Success", res);
      setTimeout(() => {
        setResult("");
      }, 3000);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  const inquireClose = ()=>{
    setInquireOpen(false)
    document.body.classList.remove("no-scroll");
  }
  return (
    <div className="w-full h-screen flex justify-center items-center z-50 bg-black/80 relative ">
        <X onClick={()=>inquireClose()} size={40} color="white" className="absolute md:block hidden right-5 top-5 cursor-pointer "/>
        <X onClick={()=>inquireClose()} size={30} color="white" className="absolute md:hidden block right-5 top-5 cursor-pointer "/>
    <div className='w-[90vw] h-[540px] mt-3 relative '>
       <div className='absolute flex justify-center xl:justify-end xl:pr-20 w-full h-full items-center  '>
        <div className=' w-[90%]  md:w-[461px] h-fit bg-white pb-3 rounded-[20px]  '>
           <p className='font-workSans font-medium text-center pt-5 text-[26px] text-[#F29622] '><b className='font-workSans text-[26px] text-[#101010] '>Quick </b>Inquire</p>
           <form onSubmit={onSubmit} ref={contactRef} className='w-[90%] mx-auto mt-7 flex flex-col gap-y-5 '>
             <input placeholder='Enter Your Name' type='text' name="name" required className='w-full h-[40px] rounded-[10px] outline-none focus:outline-[#F29622] duration-500 transition-all placeholder:text-[#535353] placeholder:text-[13px] placeholder:font-workSans px-4 bg-[#F4F5F5]  ' />
             <input placeholder='Company Name' type='text' name="companyName" required className='w-full h-[40px] rounded-[10px] outline-none focus:outline-[#F29622] duration-500 transition-all placeholder:text-[#535353] placeholder:text-[13px] placeholder:font-workSans px-4 bg-[#F4F5F5]  ' />
             <input placeholder='Email' type='email' name="email" required className='w-full h-[40px] rounded-[10px] outline-none focus:outline-[#F29622] duration-500 transition-all placeholder:text-[#535353] placeholder:text-[13px] placeholder:font-workSans px-4 bg-[#F4F5F5]  ' />
             <input placeholder='Phone' type='number' name="phone" required className='w-full h-[40px] rounded-[10px] outline-none focus:outline-[#F29622] duration-500 transition-all placeholder:text-[#535353] placeholder:text-[13px] placeholder:font-workSans px-4 bg-[#F4F5F5]  ' />
             <textarea placeholder='Inquiry' type='text' name="inquiry" required className='w-full h-[101px] rounded-[10px] outline-none focus:outline-[#F29622] duration-500 transition-all placeholder:text-[#535353] placeholder:text-[13px] placeholder:font-workSans p-4 bg-[#F4F5F5]  ' />
             <button className='w-full h-[45px] rounded-[14px] mt-1 bg-black text-white font-montserrat font-semibold text-[16px] ' >Submit</button>
           </form>
           <p className='text-[#F29622] text-center text-[16px] mt-1 font-[600]'>{result}</p>
        </div>
    </div>
    <img src="/img/contactBanner.png" className='w-full h-full xl:block hidden  '/>
    <img src="/img/EcoCrafted.jpg" className='w-full h-full block xl:hidden object-cover '/>
      
    </div>
    </div>

  )
}

export default Inquire2
