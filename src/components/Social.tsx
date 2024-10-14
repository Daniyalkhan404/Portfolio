"use client"

import Link from 'next/link';
import React from 'react'
import {FaGithub, FaLinkedinIn,FaYoutube,FaTwitter} from "react-icons/fa"

const Socials = [
    {icon :<FaGithub/>, path:"/"},
    {icon :<FaLinkedinIn/>, path:"https://www.linkedin.com/in/daniyal-khan-8bb012232/"},
    {icon :<FaYoutube/>, path:"/"},
    {icon :<FaTwitter/>, path:"/"},
];

const Social = ({containerStyles="", iconStyles=""}) => {
  return (
    <div className={containerStyles}>
      {Socials.map((item,index)=>{
        return(
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        );
      })}
    </div>
  )
}

export default Social
