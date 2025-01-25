"use client";

import React from 'react'
import {BsArrowDownRight} from "react-icons/bs"
import Link from 'next/link';


const Services =[
  {
    num:"01",
    title:"Web Development",
    description:"Building responsive, modern, and scalable web applications tailored to your needs.",
    href:""
  },
  {
    num:"02",
    title:"UI/UX Design",
    description:"Creating intuitive, user-friendly interfaces that enhance the digital experience.",
    href:""
  },
  {
    num:"03",
    title:"Logo Design",
    description:"Designing impactful logos that capture your brand's identity and leave a lasting impression.",
    href:""
  },
];

import {motion} from "framer-motion";



const service = () => {
  return (
      <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
        <div className='container mx-auto'>
          <motion.div
          initial={{ opacity:0 }}
          animate={{
            opacity:1,
            transition:{ delay:2.4, duration:0.4, ease:"easeIn"},
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
          >
            {Services.map((Service,index)=> {
              return (
              <div key={index}
              className='flex-1 flex flex-col justify-center gap-6 group'
              >
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline
                  text-transparent group-hover:text-outline-hover
                  transition-all duration-500'>
                    {Service.num}
                  </div>
                  <Link href={Service.href}
                  className='w-[70px] h-[70px] rounded-full bg-white
                  group-hover:bg-accent transition-all duration-500 flex 
                  justify-center items-center hover:-rotate-45'
                  >
                  <BsArrowDownRight className='text-primary text-3xl'/>
                  </Link>
                </div>
                  {/* title */}
                <h2 className='text-[42px] font-bold leading-none text-white
                group-hover:text-accent transition-all duration-500'>
                  {Service.title}
                </h2>
                  {/* description */}
                <p className='text-white/60'>
                  {Service.description}
                </p>

                <div className='border-b border-white/20 w-full'>

                </div>

              </div>  
              );
            })}
          </motion.div>
        </div>
      </section>
  )
}

export default service
