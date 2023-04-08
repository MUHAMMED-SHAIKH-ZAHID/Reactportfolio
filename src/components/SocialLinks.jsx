import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'






const SocialLinks = () => {
    const sociallinks = [
        {
            id:1,
            child:(<>Linkedin <FaLinkedin size={30}/></>  ),
            href:'https://www.linkedin.com/in/muhammed-shaikh-zahid-u-155a98248/',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(<>Github <FaGithub size={30}/></>  ),
            href:'https://github.com/MUHAMMED-SHAIKH-ZAHID',
           
        },
        {
            id:3,
            child:(<>Email <HiOutlineMail size={30}/></>  ),
            href:'mailto:muhdshaikhzahid@gmail.com',
           
        },
       
        
    ]


  return (
    <div className='hidden  lg:flex flex-col top-[40%] left-0 fixed'>
        <ul>
            {sociallinks.map(({id,child,href,style,download})=>(
                <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-700 ${style}`}>
                <a href={href} className='flex justify-between items-center w-full  text-white' download={download} target = '_blank' rel="noreferrer">
                    {child}
                </a>
            </li>

            ))}
            
        </ul>
    </div>
  )
}

export default SocialLinks